(function (window){
	'use strict';

	if (window.RSCatalogSorter)
		return;

	window.RSCatalogSorter = function (arParams)
	{

		this.items = [];
		this.errorCode = 0;
			
		this.node = {};
		this.target = null;
		this.sorter = null;
		this.pagination = null;
		this.lazyload = null;

		if (typeof arParams === 'object')
		{
			this.visual = arParams.VISUAL;
		}

		if (this.errorCode === 0)
		{
			BX.ready(BX.delegate(this.init, this));
		}
	};
	
	window.RSCatalogSorter.prototype = {
		init: function()
		{
			this.obSorter = BX(this.visual.ID);
			if (!this.obSorter)
			{
				this.errorCode = -1;
			}
		
			this.items = BX.findChildren(this.obSorter, {tagName: 'a'}, true);
			if (this.items.length > 0)
			{
				BX.bindDelegate(this.obSorter, 'click', {tagName : 'a'}, BX.proxy(this.catalogRefresh, this));
			}
			
			this.ajaxId = this.visual.TARGET_ID;

			if (this.ajaxId)
			{
				this.node.target = BX(this.ajaxId);
			}
			
			if (this.node.target) {
				this.node.container = this.node.target.querySelector('[data-entity^="container-"]');
				this.node.pagination = this.node.target.querySelectorAll('[data-entity="pagination"]');
				this.node.lazyload = this.node.target.querySelector('[data-entity="lazyload"]');
			}
		},

		catalogRefresh: function(event)
		{
			var target = BX.proxy_context;

			if (!!target)
			{
				var data = {},
					url = target.getAttribute('href')/*.split('+').join('%2B')/*.replace(' ', '+')*/; // url fix;
			
				data['action'] = 'updateItems';
					
				if (url.indexOf('?') < 0)
					url += '?';
				else if(url.slice(-1) != '&')
					url += '&';
					
				url += 'action=updateItems';
			
				if (this.ajaxId != undefined)
				{
					url += '&AJAX_ID=' + this.ajaxId;
				}
			
				if (!this.formPosting)
				{
					this.formPosting = true;
					this.showWait();
					this.sendRequest(url, data);
				}
			
				event.preventDefault();
			}
		},

		sendRequest: function(url, data)
		{
			var defaultData = {
				// siteId: this.siteId,
				// template: this.template,
				// parameters: this.parameters
			};

			if (this.ajaxId)
			{
				defaultData.AJAX_ID = this.ajaxId;
			}

			var animation = new RS.Utils.PageAnimate({
				animation: 'pageOutLine',
				durationOut: 2500,
				onComplete: function(){}
			});

			animation.start();

			BX.ajax({
				url: (url.indexOf('clear_cache=Y') !== -1 ? BX.util.add_url_param(url, {'clear_cache': 'Y'}) : url),
				method: 'POST',
				dataType: 'json',
				timeout: 60,
				data: BX.merge(defaultData, data),
				onsuccess: BX.delegate(function(result){
					if (!result || !result.JS)
						return;

					BX.ajax.processScripts(
						BX.processHTML(result.JS).SCRIPT,
						false,
						BX.delegate(function(){this.showAction(result, data);}, this)
					);
				}, this)
			});
		},
	
		showAction: function(result, data)
		{
			if (!data)
				return;

			switch (data.action)
			{
				case 'updateItems':
					this.processCatalogRefreshAction(result);
					break;
			}

			var animation = new RS.Utils.PageAnimate({
				animation: 'pageInLine',
				onComplete: function () {}
			});

			animation.start();
		},

		processCatalogRefreshAction: function(result)
		{
			this.formPosting = false;

			if (result)
			{
				this.refresh(result.sorter);
				this.processSection(result.section);
				// this.processItems(result.items);
				// this.processPagination(result.pagination);
				// this.processLazyload(result.lazyload);
				this.closeWait();
			}
		},

		processSection: function(sectionHtml)
		{
			if (!sectionHtml)
				return;

			var processed = BX.processHTML(sectionHtml, false);

			if (this.node.target)
			{
				this.node.target.innerHTML = processed.HTML
			}

			BX.ajax.processScripts(processed.SCRIPT);
			
			if (RS !== undefined)
			{
				RS.Init(this.node.target);
			}
		},
/*
		processItems: function(itemsHtml)
		{
			if (!itemsHtml)
				return;

			var processed = BX.processHTML(itemsHtml, false);

			if (this.node.container)
			{
				this.node.container.innerHTML = processed.HTML
			}

			BX.ajax.processScripts(processed.SCRIPT);
		},

		processPagination: function(paginationHtml)
		{
			if (!paginationHtml)
				return;

			for (var k in this.node.pagination)
			{
				if (this.node.pagination.hasOwnProperty(k) && BX.type.isDomNode(this.node.pagination[k]))
				{
					this.node.pagination[k].innerHTML = paginationHtml;
				}
			}
		},

		processLazyload: function(lazyloadHtml)
		{
			if (!lazyloadHtml) {
				BX.hide(this.node.lazyload);
			} else {
				BX.show(this.node.lazyload);
			}
		},
*/
		refresh: function(sorterHtml)
		{
			if (!sorterHtml)
				return;

			var processed = BX.processHTML(sorterHtml, false);

			if (this.obSorter)
			{
				this.obSorter.innerHTML = processed.HTML
			}

			BX.ajax.processScripts(processed.SCRIPT);
			
			if (RS !== undefined)
			{
				RS.Init(this.obSorter);
			}
		},

		showWait: function()
		{
			BX.addClass(this.node.target, 'overlay is-loading');
		},

		closeWait: function()
		{
			BX.removeClass(this.node.target, 'overlay is-loading');
		},
	}

})(window);
