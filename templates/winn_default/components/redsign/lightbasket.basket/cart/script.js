(function (window){
	'use strict';

	if (window.RSLightbasketCart)
		return;

	window.RSLightbasketCart = function (params) {
		this.id = params['ID'];
		this.$cart = $("#" + this.id);

		this.templateName = params['TEMPLATE_NAME'];
		this.arParams = params['TEMPLATE_PARAMS'];
		this.ajaxPath = params['AJAX_PATH'];
		this.siteId = params['SITE_ID'];
		this.timeout = 0;

		BX.addCustomEvent('clear.rs_lightbasket', $.proxy(this.refresh, this));
		BX.addCustomEvent('delete.rs_lightbasket', $.proxy(this.refresh, this));
		BX.addCustomEvent('update.rs_lightbasket', $.proxy(this.refresh, this));

		this.initContentEvents();
	}

	window.RSLightbasketCart.prototype = {

		initContentEvents: function() {

			this.$cart.find('[data-id]').each(function(key, node){

				$(node).find('.product-amount-field-btn-minus').on('click', this.quantityDown);
				$(node).find('.product-amount-field-btn-plus').on('click', this.quantityUp);
				$(node).find('.product-amount-field').on('change', $.proxy(this.updateQuantity, this));

				$(node).find('.js-cart__remove').on('click', $.proxy(function (e) {
					e.preventDefault();
					this.startLoader();
					var id = parseInt($(e.target).closest('[data-id]').data('id'));
					Basket.delete(id);
				}, this));

			}.bind(this));
		},

		refresh: function() {
			this.startLoader();
		
			BX.ajax({
				url: this.ajaxPath,
				method: 'POST',
				dataType: 'json',
				data: {
					action: 'get',
					sessid: BX.bitrix_sessid(),
					templateName: this.templateName,
					arParams: this.arParams,
					siteId: this.siteId,
					ajax_basket: 'Y',
				},
				onsuccess: function(result) {
					this.$cart.html(result['CONTENT']);
					// this.updateCount(result['COUNT']);
					
					if (RS.Init)
					{
						RS.Init(this.$cart);
					}
		
					this.initContentEvents();
					this.endLoader();
		
				}.bind(this)
			});
		},
		
		updateQuantity: function(e) {
		
			clearTimeout(this.timeout);
		
			this.timeout = setTimeout(function() {
				this.startLoader();
		
				var $input = $(e.target);
				var quantity = parseFloat($input.val(), 10);
				var itemId = parseInt($input.closest('[data-id]').data('id'));
				var defer = $.Deferred();
		
				var request = Basket.updateQuantity(itemId, quantity);
		
			}.bind(this), 500);
		
    },

		startLoader: function () {
			this.$cart.addClass('overlay is-loading');
		},
		
		endLoader: function () {
			this.$cart.removeClass('overlay is-loading');
		},
		
		quantityUp: function(event) {
			var $basketItem = $(event.target).closest('[data-id]');
			var $input = $basketItem.find('.product-amount-field');
			
			if ($input.length < 1)
			{
				return false;
			}
		
			var quantity = parseFloat($input.val(), 10);
			$input.val(++quantity).trigger('change');
		},

		quantityDown: function(event) {
			var $basketItem = $(event.target).closest('[data-id]');
			var $input = $basketItem.find('.product-amount-field');
			var quantity = parseFloat($input.val(), 10);
			
			if ($input.length < 1)
			{
				return false;
			}
		
			$input.val(--quantity > 0 ? quantity : 1).trigger('change');
		}
	}

})(window);