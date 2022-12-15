(function (window){
	'use strict';

	if (window.JCAchievments)
		return;

	window.JCAchievments = function (arParams)
	{
		this.params = {};

		if (typeof arParams === 'object')
		{
			this.params = arParams;
		}

		BX.ready(BX.delegate(this.init, this));
	};

	JCAchievments.prototype = {
		init: function()
		{
			$('#'+this.params.ID).waypoint({
				handler: function(direction) {
					var $el = $(this.element);
			
					$el.find('.js-about-company__number').each(function(key, item) {
						var $item = $(item);
						var number = $item.data('number');
			
						if (!$.isNumeric(number)) {
							return;
						}
			
						$item.animate({
							count: $item.data('number')
						}, {
							duration: 2000,
							easing: 'swing',
							step: function(now) {
								$item.text(BX.util.number_format(Math.ceil(now), '', '', ' '));
							}
						});
					});
			
					this.destroy();
				},
				offset: '100%',
			});
		},

	};

	return JCAchievments;

})(window);