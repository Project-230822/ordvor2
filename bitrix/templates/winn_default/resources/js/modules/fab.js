import $ from 'jquery'
import assign from 'lodash/assign'

const Fab = ($ => {

	// jQuery reverse
	$.fn.reverse = [].reverse;

	const Default = {
		hoverEnabled: true,
	};

	class Fab
	{
		constructor (element, name, config)
		{
			this.element = element;
			this.name = name;
			this.$element = $(this.element);
			this.config = assign({}, Default, config);
			this.instance = undefined;

			this.prepare();
			this.initFab();

		}

		prepare ()
		{
		}


		initFab ()
		{
			this.$button = this.$element.children('[data-fab-btn]');

			this.menuHorizontal = {
				$element: this.$element.children('[data-fab-menu-horizontal]')
			}

			this.menuVertical = {
				$element: this.$element.children('[data-fab-menu-vertical]')
			}


			//TODO: direction;
			if (this.menuHorizontal.$element.length)
			{
				this.menuHorizontal.$btnsReverse = this.menuHorizontal.$element.find('[data-fab-menu-btn]').reverse();
				this.menuHorizontal.offsetX = 40;
				this.menuHorizontal.offsetY = 0;
			}

			if (this.menuVertical.$element.length)
			{
				this.menuVertical.$btnsReverse = this.menuVertical.$element.find('[data-fab-menu-btn]').reverse();
				this.menuVertical.offsetX = 0;
				this.menuVertical.offsetY = -40;
			}
			

			if (this.config.hoverEnabled)
			{
				$(this.$element).on('mouseenter', function(e) {
					this.openFABMenu();
				}.bind(this));

				$(this.$element).on('mouseleave', function(e) {
					this.closeFABMenu();
				}.bind(this));	
			}
			else
			{
				$(this.$button).on('click', () => {
					if (this.$element.hasClass('active'))
					{
						this.closeFABMenu(this.$element);
					}
					else
					{
						this.openFABMenu(this.$element);
					}
				});
			}
		}

		openFABMenu ()
		{
			var time;

			if (this.$element.hasClass('active') === false)
			{
				this.$element.addClass('active');
				if (this.menuHorizontal.$element.length)
				{
					time = 100;
					this.menuHorizontal.$btnsReverse.each(function () {
						var $el = this;
						$(this).velocity({
							opacity: 1,
							scale: 1,
							translateY: 0,
							translateX: 0
						}, {
							duration: 275,
							delay: time,
							easing: 'easeInOutQuad'
						});
						time += 40;
					});
				}

				if (this.menuVertical.$element.length)
				{
					time = 100;
					this.menuVertical.$btnsReverse.each(function () {
						$(this).velocity({
							opacity: 1,
							scale: 1,
							translateY: 0,
							translateX: 0
						}, {
							duration: 275,
							delay: time,
							easing: 'easeInOutQuad'
						});
						time += 40;
					});
				}
			}
		};

		closeFABMenu ()
		{
			if (this.menuHorizontal.$element.length)
			{
				this.menuHorizontal.$btnsReverse.velocity('stop', true);
				this.menuHorizontal.$btnsReverse.velocity({
					opacity: 0,
					scale: 0.4,
					translateY: this.menuHorizontal.offsetY,
					translateX: this.menuHorizontal.offsetX
				}, {
					duration: 175,
					easing: 'easeOutQuad',
					complete: () => {
						this.$element.removeClass('active');
					}
				});
			}

			if (this.menuVertical.$element.length)
			{
				this.menuVertical.$btnsReverse.velocity('stop', true);
				this.menuVertical.$btnsReverse.velocity({
					opacity: 0,
					scale: 0.4,
					translateY: this.menuVertical.offsetY,
					translateX: this.menuVertical.offsetX
				}, {
					duration: 175,
					easing: 'easeOutQuad',
					complete: () => {
						this.$element.removeClass('active');
					}
				});
			}
		};
	}

	return Fab;
})(jQuery);

export default Fab;
