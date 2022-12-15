;
(function(window, document, BX) {
	'use strict';

	if (!window.RS) {
		window.RS = {};
	}

	if (window.RS.GlobalCart) {
		return;
	}

	var globalBasketInstance;

	RS.GlobalBasket = function(siteId, templateName, ajaxPath, arParams) {
		this.itemRemoved = false;

		this.siteId = siteId;
		this.templateName = templateName;
		this.arParams = arParams;
		this.ajaxPath = ajaxPath;

		BX.addCustomEvent('add2basket.rs_lightbasket', $.proxy(this.refresh, this));
		BX.addCustomEvent('clear.rs_lightbasket', $.proxy(this.refresh, this));
		BX.addCustomEvent('delete.rs_lightbasket', $.proxy(this.refresh, this));
		BX.addCustomEvent('update.rs_lightbasket', $.proxy(this.refresh, this));
	};

	RS.GlobalBasket.init = function(siteId, templateName, ajaxPath, arParams) {
		if (!globalBasketInstance) {
			globalBasketInstance = new RS.GlobalBasket(siteId, templateName, ajaxPath, arParams);
		}

		BX.addCustomEvent(window, 'OnBasketChange', function () {
			var blocks = document.querySelectorAll('.js-global-cart[data-type="ajax"][data-need-cache="Y"]');

			if (blocks !== undefined)
			{
				for (var i = 0; i < blocks.length; i++)
				{
					blocks[i].setAttribute('data-need-reload', 'Y');
				}
			}
		});

		return globalBasketInstance;
	}

	RS.GlobalBasket.prototype = {

		refresh: function(data) {
			if (this.itemRemoved) {
				this.itemRemoved = false;
				return;
			}

			data = data || {};

			data.action = 'get';
			data.sessid = BX.bitrix_sessid();
			data.siteId = this.siteId;
			data.templateName = this.templateName;
			data.arParams = this.arParams;
			BX.ajax({
				url: this.ajaxPath,
				method: 'POST',
				dataType: 'json',
				data: data,
				onsuccess: this.updateBlocks
			});
		},

		updateBlocks: function(result) {
			var blocks = document.querySelectorAll('.js-global-cart');

			if (blocks !== undefined)
			{
				for (var i = 0; i < blocks.length; i++)
				{
					var block = blocks[i];
					var countBlock = block.querySelector('.js-global-cart__count');

					var obFabMenuItem = BX.findParent(block, {attribute: {'data-fab-menu-btn': ''}}, true);

					if (result.COUNT > 0)
					{
						block.classList.add("has-items");

						if (obFabMenuItem)
						{
							obFabMenuItem.classList.add('fab__menu-btn--visible');
						}
					}
					else
					{
						block.classList.remove("has-items");
					}

					// if (countBlock)
					// {
					// 	countBlock.innerHTML = result.COUNT;
					// }
				}
			}
		}
	};
})(window, document, BX);