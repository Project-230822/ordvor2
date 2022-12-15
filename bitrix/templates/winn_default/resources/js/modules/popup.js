import _parseOptions from '../utils/parseOptions';
import assign from 'lodash/assign'
import $ from 'jquery';
import isDesktop from '../utils/isDesktop';

// export const windowPopupOptions

// export function init(context)


const Popup = ($ => {

	const windowPopupOptions = {
		infobar: false,
		buttons: false,
		slideShow: false,
		fullScreen: false,
		animationEffect: "slide-down-in",
		animationDuration: 300,
		thumbs: false,
		//modal: true,
		ajax: {
			settings: {
				cache: true,
				data: {
					cache: true,
					fancybox: true
				}
			}
		},
		touch: false,
		keyboard: true,
		btnTpl: {
			smallBtn: ''
		},
		baseTpl: '<div class="fancybox-container popup-form" role="dialog" tabindex="-1">' +
			'<div class="fancybox-bg"></div>' +
			'<div class="fancybox-inner">' +
			'<div class="fancybox-stage"></div>' +
			'</div>' +
			'</div>',
		beforeLoad: function (instance, slide, b) {
	
			var scrollbarWidth = $.fancybox.scrollbarWidth;
	
			$('.l-page').addClass('filter-blur');
	
			if (RS.Panel && RS.Panel.openned)
			{
				RS.Panel.close();
			}
		},
		afterLoad: function(instance, slide)
		{
			var obContent = slide.$content.get(0),
				data = BX.parseJSON(obContent.innerHTML);
	
			if (data)
			{
				var pageAssets = BX.processHTML(data.JS);
				
				if (pageAssets.STYLE.length > 0)
				{
					BX.loadCSS(pageAssets.STYLE);
				}
	
				if (pageAssets.SCRIPT)
				{
					var processed = BX.processHTML(data.DATA, false);
	
					obContent.innerHTML = processed.HTML;
	
					BX.ajax.processScripts(
						pageAssets.SCRIPT,
						false,
						BX.proxy(function(){
							BX.ajax.processScripts(processed.SCRIPT);
						}, this)
					);
				}
	
			}

			if (RS.Init)
			{
				RS.Init(this.$content);
			}
	
			this.$content.wrapAll('<div>');
	
			var $wrapper = this.$content.parent();
			$wrapper.prepend('<button data-fancybox-close class="fancybox-close-small btn btn-primary"><svg class="icon-svg"><use xlink:href="#svg-cross"></use></svg></button>');

			var title = !!slide.opts.title && slide.opts.title.length ?
				slide.opts.title :
				!!instance.opts.title && instance.opts.title.length ?
				instance.opts.title :
				undefined;

			if (title !== undefined)
			{
				this.$content.parent().prepend('<div class="fancybox-title fancybox-title-inside-wrap">' + title + '</div>');
			}
		},
	
		beforeShow: function(instance, slide) {
		},
	
		afterShow: function(instance, slide) {
		},
	
		beforeClose: function () {
			$('.l-page').removeClass('filter-blur');
		},
	
		afterClose: function (instance) {
	
			setTimeout(() => {
				$('.js-fix-scroll').removeClass('js-fix-scroll--fixed');
			});
		}
	}
	
	const fullscreenPopupOptions = assign({}, windowPopupOptions, {
		slideClass: "fullscreen",
		animationEffect: 'zoom-in-out',

		spinnerTpl: '<div><div class="fancybox-loading"></div></div>',

		ajax: {
			settings: {
				cache: true,
				data: {
					cache: true,
					fancybox: true,
					fancyboxFullscreen: true
				}
			}
		},

		afterLoad: function(instance, slide) {
			this.$content.wrapAll('<div>');

			var $wrapper = this.$content.parent();
			$wrapper.prepend('<button data-fancybox-close class="fancybox-close-small btn btn-primary"><svg class="icon-svg"><use xlink:href="#svg-cross"></use></svg></button>');

			if (RS.Init)
			{
				RS.Init(this.$content);
			}

			var title = !!slide.opts.title && slide.opts.title.length ?
				slide.opts.title :
				!!instance.opts.title && instance.opts.title.length ?
				instance.opts.title :
				undefined;

			if (title !== undefined)
			{
				this.$content.prepend('<div class="fancybox-title fancybox-title-inside-wrap">' + title + '</div>');
			}
		}
	});
	
	const sidePopupOptions = {
		popupClass: "",
		position: "right",
		scrollContent: true,
		scrollBlock: false,
	};

	class Popup
	{
		constructor(element, name, config)
		{
			this.element = element;
			this.name = name;
			this.$element = $(this.element);
			// this.config = assign({}, Default, config);
			this.instance = undefined;
			this.blockMeta = {
				"scripts": [],
				"styles": [],
				"inline": [],
			};
	
			this.headTags = [
				"link[href]"
				, "script[src]"
			].join(',');

			// this.setup(config);
			this.init();
		}

		init ()
		{
			let options = _parseOptions(this.element.getAttribute('data-popup-options'));
			let popupType = (RS.Options || {}).defaultPopupType;
	
	
			if (this.element.getAttribute('data-popup-type'))
			{
				popupType = this.element.getAttribute('data-popup-type')
			}

			// if (popupType == 'side' && !isDesktop())
			// {
			// 	popupType = 'fullscreen';
			// }
	
			switch (popupType)
			{
				case 'side':
					this.config = assign({}, sidePopupOptions, options);
					$(this.element).click((e) => {

						e.preventDefault();

						if (isDesktop())
						{
							this.openPanel();
						}
						else
						{
							let url = this.element.getAttribute('href');
							if (url.length > 0)
							{
								url = BX.util.add_url_param(url, {'backurl': encodeURIComponent(window.location.href)});
								window.location.replace(url);
							}
						}
					});
					break;
	
				case 'fullscreen':
					this.config = assign({}, fullscreenPopupOptions, options);
					// $(this).fancybox(options);
					$(this.element).click((e) => {
						e.preventDefault();
						this.openPopup();
					});
	
					break;

				case 'window':
				default:
					this.config = assign({}, windowPopupOptions, options);
					// $(this).fancybox(options);
					$(this.element).click((e) => {
						e.preventDefault();
						this.openPopup();
					});
	
					break;
			}
		}

		openPopup ()
		{
			this.element.setAttribute('data-fancybox', this.element.getAttribute('data-popup'));
	
			const d = $.Deferred();

			if (this.element.getAttribute('data-type') == 'ajax')
			{
				const url = this.element.getAttribute('data-src') || this.element.href;

				this.config.title = this.element.getAttribute('fancybox-title') ||  this.element.getAttribute('title') || this.element.text;
				
				this.loadPopup(url)
					.then((content) => {
						this.addMeta(content).then(() => {
							let newContent = content.split('<!-- ajax-content-custom -->', 3)[1];
							if (newContent == undefined)
							{
								newContent = content.split('<!-- ajax-content -->', 3)[1];
							}
			
							newContent = newContent == undefined ? content: newContent;
							
							const wrapper = document.createElement('div');
							wrapper.innerHTML = newContent;

							let block;
							if (wrapper.childElementCount > 1)
							{
								$.fancybox.open(wrapper, this.config);
							}
							else
							{
								$.fancybox.open(wrapper.firstChild, this.config);
							}
							
							d.resolve();

						});
					});
			}
			else
			{
				$.fancybox.open(this.element, this.config);
			}

	
			return d;
		}

		openPanel ()
		{
			const activeItem = () => {
				this.element.classList.add('is-active');
	
				$(document).one('panel.closed', () => {
					this.element.classList.remove('is-active');
				});
			};
	
			if (!this.element.classList.contains('is-active'))
			{
				if (RS.Panel.openned) {
					$(document).one('panel.before_open', () => {
						activeItem();
					});
				} else {
					activeItem();
				}
	
				RS.Panel.open(this.element, this.config)
					.then((content) => {
						if (RS.Init)
						{
							RS.Init(content.block);
						}
					});
			}
			else
			{
				RS.Panel.close(this.element);
			}
		}

		loadPopup (url)
		{
			const d = $.Deferred();
	
			$(document).trigger('panel.before_load', [url]);
			$.ajax({
				url: url
			}).then((result) => {
	
				var resultJson = BX.parseJSON(result);
	
				if (resultJson) {
					if (resultJson.SCRIPTS) {
						this.processScripts(resultJson.SCRIPTS, () => {
							d.resolve(resultJson.HTML);
						});
					} else {
						d.resolve(resultJson.HTML);
					}
				} else {
					d.resolve(result);
				}
			});
	
			return d.promise();
		}


		addMeta(content = '')
		{
			let loadScript = (assets) => {
				const d = $.Deferred();

				BX.loadScript(assets, () => {
					d.resolve();
				});

				return d.promise();
			};
			let loadCss = (assets) => {
				const d = $.Deferred();

				let css = assets.map(function(url) {
					return { url: url, ext: "css" }
				});
	
				BX.load(css, () => {
					d.resolve();
				});

				return d.promise();
			};

			let $newPageHead = $( '<html />' ).html(
				$.parseHTML(content, document, true)
			);
	
	
			let $currentTags = $(document).find(this.headTags),
				$newTags = $newPageHead.find(this.headTags);
	
			// add new tags
			$newTags.filter((indexNewItem, newItem) => {
	
				return $currentTags.filter((indexCurrentItem, currentItem) => {
					return currentItem.outerHTML == newItem.outerHTML;
				}).length == 0;
	
			}).each((index, element) => {
				let sourceUrl;
	
				switch (element.tagName.toLowerCase())
				{
					case 'script':
						sourceUrl = element.getAttribute('src');
						if (sourceUrl.length > 0)
						{
							this.blockMeta.scripts.push(sourceUrl);
						}
						break;
					case 'link':
						sourceUrl = element.getAttribute('href');
						if (sourceUrl.length > 0)
						{
							this.blockMeta.styles.push(sourceUrl);
						}
						break;
					default:
						this.blockMeta.inline.push(element.innerHTML);
				}
			});
		
			return $.when(
				loadScript(this.blockMeta['scripts']),
				loadCss(this.blockMeta['styles'])
			);
		}
	
		removeMeta()
		{
			let $currentTags = $(document).find(this.headTags);

			$currentTags.filter(
				(indexCurrentItem, currentItem) => {
					switch (currentItem.tagName.toLowerCase())
					{
						case 'script':
							if (BX.util.in_array(currentItem.getAttribute('src'), this.blockMeta.scripts))
							{
								return true;
							}
							break;
						case 'link':
							
							if (BX.util.in_array(currentItem.getAttribute('href'), this.blockMeta.styles))
							{
								return true;
							}
							break;
						case 'inline':
							break;
					}
	
				}
			).remove();
	
			for (let type in this.blockMeta)
			{
				this.blockMeta[type] = [];
			}
		}
	}
	
	return Popup;

})(jQuery);

export default Popup;


export function openPopup (content = '', type = 'window', options = {}) {

	switch (type) {
		case 'window':
		default:
			options = _merge({}, windowPopupOptions, options);

			$.fancybox.open(content, options);

			break;
	}
}
