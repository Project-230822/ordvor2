import $ from 'jquery'
import 'owl.carousel'
import assign from 'lodash/assign'

const Slider = ($ => {
	const Default = {
		items: 4,
		margin: 30,
		navClass: [
			'owl-prev btn btn-icon btn-opacity-dark',
			'owl-next btn btn-icon btn-opacity-dark'
		],
		navText: [
			'<svg class="icon icon-svg"><use xlink:href="#svg-chevron-left"></use></svg>',
			'<svg class="icon icon-svg"><use xlink:href="#svg-chevron-right"></use></svg>'
		],
		autoplayHoverPause: true,
		// responsive: {
		// 	0:		{items: 1},
		// 	380:	{items: 2},
		// 	576:	{items: 2},
		// 	768:	{items: 2},
		// 	992:	{items: 3},
		// 	1200:	{items: 4}
		// }
		onInitialized: function()
		{
		}
	};

	class Slider
	{
		constructor (element, name, config)
		{
			this.element = element;
			this.name = name;
			this.$element = $(this.element);
			this.config = assign({}, Default, config);
			this.instance = undefined;

			this.prepare();
			this.findDotsContainer();
			this.findNavContainer();

			this.config.onTranslated = function()
			{
				let lazyloadInstance = $('.lazyload').data("plugin_lazy");
				if (lazyloadInstance)
				{
		            lazyloadInstance.update();
		        }

				if (this.config.progressLine)
				{
					this.startProgressBar();
					
					// this.instance.trigger('stop.owl.autoplay');
					this.instance._plugins.autoplay.stop();
					this.instance._plugins.autoplay.play();
				}

				this.startVideo();
				
			}.bind(this);

			this.config.onTranslate = function()
			{
				if (this.config.progressLine)
				{
					this.resetProgressBar();
				}

				this.stopVideo();

			}.bind(this);

			this.initSlider();
		}

		prepare ()
		{
			// remove show classes
			this.$element.removeClass((index, className) => {
				return (className.match (/(^|\s)show-items-\S+/g) || []).join(' ');
			});

			// add owl-carousel container
			this.$element.addClass('owl-carousel');

			// Clear Grid
			if (this.$element.hasClass('row')) {
				this.$element.removeClass('row');
				this.$element.children('[class*=col]').removeClass((index, className) => {
					return (className.match (/(^|\s)col-\S+/g) || []).join(' ');
				});
			}
		}

		findDotsContainer ()
		{
			const $container = $('[data-slider-dots=' + this.name + ']');

			if ($container.length)
			{
				let dotsId = 'slider-dots-' + this.name;

				$container
					.addClass('slider-dots')
					.attr('id', dotsId);

				this.config.dots = true;
				this.config.dotsContainer = '#' + dotsId;
			}
			else
			{
				// this.config.dots = false;
			}
		}

		findNavContainer ()
		{
			const $container = $('[data-slider-nav=' + this.name + ']');

			if ($container.length)
			{
				let navId = 'slider-nav-' + this.name;

				$container
					.addClass('slider-nav')
					.attr('id', navId);

				this.config.nav = true;
				this.config.navContainer = '#' + navId;
			}
			else
			{
				// this.config.nav = false;
			}
		}

		initProgressLine ()
		{
			if (this.instance.settings.dotsData && this.instance.settings.dotsContainer)
			{
				// $(this.instance.settings.dotsContainer).progressLine(document);

				$(this.instance.settings.dotsContainer).find('.owl-dot').each((key, node) => {

					let progressline = $(node).find('.progressline');
					if (progressline.length < 1)
					{
						$(node).append('<div class="progressline"><div class="progressline__progress" style="width:0"></div></div>');
					}
				});

				if (this.config.progressLine)
				{
					this.startProgressBar();
				}
			}
		}

		initSlider ()
		{
			this.instance = this.$element.owlCarousel(this.config).data('owl.carousel');

			this.initProgressLine();

			this.startVideo();
		}

		startProgressBar ()
		{
			if (!this.instance)
				return;

			setTimeout(()=>{
				$(this.instance.settings.dotsContainer).find('.owl-dot.active').find('.progressline__progress').css({
					width: '100%',
					transition: 'width '+ this.instance.settings.autoplayTimeout +'ms linear'
				});
			}, 0);
		}

		resetProgressBar ()
		{
			$(this.instance.settings.dotsContainer).find('.owl-dot .progressline__progress').css({
				width: 0,
    			transition: 'width 0s'
			});
		}

		startVideo ()
		{
			// this.instance.$stage.children('.active').find('.owl-video-play-icon').click();
			this.instance.$stage.children('.active').find('.rs-banner__video').each(function(){
				this.play();
			});
		}

		stopVideo ()
		{
			this.instance.$stage.children('.active').find('.owl-video-wrapper > iframe').remove();
			this.instance.$stage.children('.active').find('.rs-banner__video').each(function(){
				this.pause();
			});
		}
	}

	return Slider;
})(jQuery);

export default Slider;
