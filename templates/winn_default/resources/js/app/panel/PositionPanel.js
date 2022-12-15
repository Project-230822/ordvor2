import $ from 'jquery';
import {show as showOverlay, hide as hideOverlay} from '../../utils/overlay';

class PositionPanel {

	constructor(panel) {
		this.panel = panel;
		this.blocks = {};
		this.blockMeta = {
			"scripts": [],
			"styles": [],
			"inline": [],
		};

		this.$preload = undefined;

		this.headTags = [
			"link[href]"
			, "script[src]"
		].join(',');
	}

	createBlock (panel = undefined, content = '')
	{
		const block = document.createElement('div');
		block.classList.add('panel-block');

		if (panel.opts.item.title || panel.opts.item.innerText)
		{
			const blockTitle = document.createElement('div');
			blockTitle.classList.add('panel-block__title');

			block.appendChild(blockTitle);
		}

		const blockContent = document.createElement('div');
		blockContent.classList.add('panel-block__content');

		block.appendChild(blockContent);

		panel.block = block;
		this.blocks[panel.opts.id] = panel;

		this.$inner.get(0).appendChild(block);

		this.updateBlock(panel, content);

		return block;
	}

	updateBlock (panel = undefined, content = '')
	{
		let block = this.blocks[panel.opts.id].block;
		$(block).removeData();

		if (panel.opts.popupClass)
		{
			block.classList.add(panel.opts.popupClass);
		}

		const blockTitle = block.querySelector('.panel-block__title');
		if (blockTitle && (panel.opts.item.title || panel.opts.item.innerText))
		{
			const title = panel.opts.item.title || panel.opts.title || panel.opts.item.innerText;

			blockTitle.innerText = title;
		}

		const blockContent = block.querySelector('.panel-block__content');
		if (blockContent)
		{
			blockContent.className = 'panel-block__content';
			// blockContent.removeAttribute('style');
			blockContent.innerHTML = '';

			let processed;
			
			if (content instanceof Element || content instanceof HTMLDocument)
			{
				blockContent.appendChild(content);
				processed = BX.processHTML(content.outerHTML, false);
			}
			else
			{
				blockContent.innerHTML = content;
				processed = BX.processHTML(content, false);
			}
			
			BX.ajax.processScripts(processed.SCRIPT);

			if (panel.opts.scrollContent)
			{
				$(blockContent).off();
				blockContent.setAttribute('data-scrollbar', '');
			}
		}

		
		if (panel.opts.scrollBlock)
		{
			const blockScroll = document.createElement('div');
			blockScroll.setAttribute('data-scrollbar', '');

			while (block.firstChild)
			{
				blockScroll.append(block.firstChild);
			}
			
			block.append(blockScroll);
		}

		// $(block).find('.panel-block__content').html(content);

		// if (RS.Init)
		// {
		// 	RS.Init(block);
		// }

		return block;
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

	update (url = undefined)
	{
		const d = $.Deferred();

		if (!this.blocks[url]) {
			d.reject();
			return d.promise();
		}

		this.panel.load(url)
			.then((content) => {
				const block = this.blocks[url].block;
				$(block).find('.panel-block__content').html(content);

				d.resolve();
			});

		return d;
	}

	open (panel = undefined)
	{
		let type = panel.type,
			id;

		const d = $.Deferred();		
		const afterFn = (panelId) => {
			this.hidePreload();
			d.resolve(this.blocks[panelId]);
			this.$panel.addClass('is-open');
			this.active = panelId;
		}

		switch (type)
		{
			case 'html':
				break;
	
			case 'inline':
				let block;
				id = panel.opts.id;

				if (this.blocks[id])
				{
					block = this.blocks[id].block;
				}
				else
				{
					block = this.createBlock(panel, panel.src);
				}
	
				showOverlay();
				this.show(block);
				afterFn(id);

				break;
	
			case 'ajax':
				
				const link = panel.opts.item;
				const url = panel.opts.item.getAttribute('data-src') || panel.opts.item.href;
				id = url;
				panel.opts.id = url;

				if (this.blocks[id])
				{
					const block = this.blocks[id].block;

					const needCache = link.getAttribute('data-need-cache') == 'Y' || panel.opts.needCache;
					const needReload = link.getAttribute('data-need-reload') == 'Y' || panel.opts.needReload;

					if (!needCache || (needCache && needReload))
					{
						showOverlay().then(($overlay) => {
							this.showPreload($overlay);

							this.panel.load(url)
								.then((content) => {

									// this.removeMeta();
									link.setAttribute('data-need-reload', 'N');

									this.addMeta(content).then(() => {
										var newContent = content.split('<!-- ajax-content-custom -->', 3)[1];
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
											block = this.updateBlock(panel, wrapper);
										}
										else
										{
											block = this.updateBlock(panel, wrapper.firstElementChild);
										}
													
										return this.show(block);
									})
									.then(() => afterFn(id));
								});
								
						});
					}
					else
					{
						showOverlay();
						this.show(block);
						afterFn(id);
					}
				}
				else
				{
					showOverlay().then(($overlay) => {
						this.showPreload($overlay);
		
						this.panel.load(url)
							.then((content) => {

								// this.removeMeta();

								this.addMeta(content).then(() => {
									var newContent = content.split('<!-- ajax-content-custom -->', 3)[1];
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
										block = this.createBlock(panel, wrapper);
									}
									else
									{
										block = this.createBlock(panel, wrapper.firstElementChild);
									}

									return this.show(block);
								})
								.then(() => afterFn(id));
							});
					});
				}
				break;
	
			default:
				break;
		}

		d.then(() => {
			$(document).on('click.outside', (e) => {
				if (
					$(e.target) != this.$inner &&
					!!!$(e.target).closest(this.$panel).length &&
					$(e.target).closest(document).length > 0
				) {
					this.panel.close();
				}
			});
		});


		return d.promise();
	}

	close()
	{
		$(document).off('click.outside');

		return $.when(
				this.hide(),
				this.hidePreload(),
				hideOverlay()
			)
			.then(() => {
				this.$panel.removeClass('is-open');

				return true;
			});
	}
}

export default PositionPanel;
