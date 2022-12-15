import $ from 'jquery'
import {show as showOverlay, hide as hideOverlay} from './utils/overlay'
import RightPanel from './app/panel/RightPanel'

const ESCAPE_KEY_CODE = 27;

const Panel = ($ => {

	class Panel {

		static get Defaults() {
			return {
				classes: {}
			};
		}

		constructor(options) {
			this.options = $.extend({}, Panel.Defaults, options);

			this.openned = null;

			this.initPanels();

			$(document).keyup((e) => {
				if (e.keyCode === ESCAPE_KEY_CODE) {
					this.close();
				}
			});

			$(document).on('click', '[data-panel-close]', () => this.close());
		}

		initPanels ()
		{
			this.panels = {};
			this.panels['right'] = new RightPanel(this);
		}

		load (url)
		{
			const d = $.Deferred();

			$(document).trigger('panel.before_load', [url]);
			$.ajax({
				url: url
			}).then((result) => {

				if (!this.openned) {
					d.reject();
				}

				var resultJson = BX.parseJSON(result);

				if (resultJson)
				{
					if (resultJson.SCRIPTS)
					{
						this.processScripts(resultJson.SCRIPTS, () => {
							d.resolve(resultJson.HTML);
						});
					}
					else
					{
						d.resolve(resultJson.HTML);
					}
				}
				else
				{
					d.resolve(result);
				}
			});

			return d.promise();
		}

		reload(url)
		{
			for (let i in this.panels)
			{
				if (!this.panels.hasOwnProperty(i))
				{
					continue;
				}

				let panel = this.panels[i];

				if (panel && panel.blocks[url])
				{
					panel.update(url);
				}
			}

		}

		processScripts(html = '', successFn = () => {})
		{
			const processed = BX.processHTML(html, false);
			BX.ajax.processScripts(processed.SCRIPT, false, () => successFn());
		}


		open (content = undefined, options = {})
		{
			const panel = this.panels[options.position] || this.panels[content.opts.position];

			if (!panel)
			{
				return;
			}

			if (this.openned)
			{
				return this.close().then(() => this.open(content, options));
			}

			let obj = {},
				opts = {};

			if ($.isPlainObject(content))
			{
				obj = content;
				opts = content.opts || content;
			}
			else if ($.type(content) === 'object' && $(content).length)
			{
				let $item = $(content);

				opts = $item.data() || {};
				opts = $.extend(true, {}, opts, opts.options);

				opts.item = content;

				obj.src = opts.src || $item.attr('href');
		
				if (!obj.type && !obj.src)
				{
					obj.type = 'inline';
					obj.src = content;
				}
				else if (obj.src)
				{
					obj.type = 'ajax';
					opts.id = obj.src;
				}
			}
			else
			{
				obj = {
					type: 'html',
					src: content + ''
				};
			}

			obj.opts = $.extend(true, {}, opts, options);

			this.openned = panel;

			$(document).trigger('panel.before_open');

			return panel.open(obj);
		}

		close()
		{
			if (this.openned)
			{
				$(document).trigger('panel.before_close');

				return this.openned.close().then(() => {
					$(document).trigger('panel.closed');

					this.openned = null;

					return true;
				});
			}

			return $.Deferred().promise();
		}

		isOpened ()
		{
			return !!this.openned;
		}
	}

	return Panel;
})(jQuery);

export default Panel;
