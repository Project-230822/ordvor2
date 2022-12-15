import $ from 'jquery';

const PageAnimate = ($ => {

    const defaultTextAnimationDelay = 200;

    const DefaultOptions = {
        durationOut: 1500,
        durationIn: 1500,
        durationProgress: 1500,
        loadingDelay: 400,
        animation: false,
        onComplete: false,
        selectors: {
            preloader: '[data-entity="smooth-preloader"]',
            preloaderProgressbar: '[data-entity="smooth-progress"]',
            content: '.js-smooth-content',
            sidebar: '.js-sidebar',
        }
    }

    class PageAnimate {

        constructor(options) {
            this.options = $.extend({}, DefaultOptions, options);

            this.$preloader = false;
            this.$progressBar = false;

            this.init();
        }

        init()
        {
            $(this.options.selectors.content).css({
                visibility: 'visible',
                opacity: 1,
                'z-index': 1,
                transition: 'none'
            });

            if (!this.$preloader)
            {
                let $preloader = $(document.body).children(this.options.selectors.preloader);

                if ($preloader.length > 0)
                {
                    this.$preloader = $preloader;
                }
                else
                {
                    this.createPreloader();
                }

                this.$progressBar = this.$preloader.find(this.options.preloaderProgressbar);
            }
        }

        createPreloader()
        {
            var preloaderHtml = '' +
                '<div class="smooth-preloader" data-entity="smooth-preloader">' +
                    '<div class="smooth-preloader__inner"></div>' +
                    '<div class="smooth-preloader__progress-bar" data-entity="smooth-progress">' +
                        '<div class="smooth-preloader__progress-bar__inner"></div>' +
                    '</div>' +
                '</div>' +
            '';

            this.$preloader = $(preloaderHtml);

            $('body').append(this.$preloader);
        }

        start ()
        {
            if (!!this.options.animation)
            {
                switch (this.options.animation)
                {
                    case 'pageOutLine':
                        this.pageOutLine();
                        break;
                    case 'pageInLine':
                        this.pageInLine();
                        break;
                    case 'pageOutOpacity':
                        this.pageOutOpacity();
                        break;
                    case 'pageInOpacity':
                        this.pageInOpacity();
                        break;
                    default:
                        console.info('PageAnimate::init -> no default animation');
                }
            }
        }

        pageOutLine()
        {
            this.$preloader
                .css({'display': ''})
                .addClass('smooth-preloader--clipOut')
                .removeClass('smooth-preloader--animate');

            this.$progressBar.css({
                'will-change': 'transform',
            });

            setTimeout(() => {
                this.$preloader.addClass('smooth-preloader--animate');

                if (!!this.options.onComplete && typeof this.options.onComplete === 'function')
                {
                    setTimeout(() => {
                        this.options.onComplete.call(this);
                    }, this.options.durationOut);
                }
            }, 10);
        }

        pageInLine()
        {
            
            this.$progressBar.css({
                'will-change': 'transform',
                transition: this.options.durationProgress + 'ms'
            });

            setTimeout(() => {
                this.$preloader.removeClass('smooth-preloader--animate');
            

                // this.animateTexts(500);
    
                setTimeout(() => {
                    this.$preloader.css({'display': 'none'});
                    if (!!this.options.onComplete && typeof this.options.onComplete === 'function')
                    {
                        this.options.onComplete.call(this);
                    }
                }, this.options.durationIn);
            }, 10);
        }

        pageOutOpacity() {

            this.$preloader
                .css({'display': ''})
                .addClass('smooth-preloader--opacityOut')
                .removeClass('smooth-preloader--animate');

                this.$progressBar.css({
                    'will-change': 'transform',
                });
    
                setTimeout(() => {
                    this.$preloader.addClass('smooth-preloader--animate');
    
                    if (!!this.options.onComplete && typeof this.options.onComplete === 'function')
                    {
                        setTimeout(() => {
                            this.options.onComplete.call(this);
                        }, this.options.durationOut);
                    }
                }, 10);
        }

        pageInOpacity() {
            this.$progressBar.css({
                'will-change': 'transform',
                transition: this.options.durationProgress + 'ms'
            });

            setTimeout(() => {
                this.$preloader.removeClass('smooth-preloader--animate');

                // this.animateTexts(500);
    
                setTimeout(() => {
                    this.$preloader.css({'display': 'none'});
                    if (!!this.options.onComplete && typeof this.options.onComplete === 'function')
                    {
                        this.options.onComplete.call(this);
                    }
                }, this.options.durationIn);
            }, 10);
        }

        animateTexts(delayParam) {
            var delay = (delayParam) ? delayParam : defaultTextAnimationDelay,
                delayPreviously = delay;

            $('.js-animated').each(function(){
                $(this).removeClass('js-lock-animated');
                
                if ($(this).data('animatecss-delay'))
                    delay = delayParam * $(this).data('animatecss-delay')

                $(this).css('animation-delay', delay + 'ms').animateCss($(this).data('animatecss'))

                if ($(this).data('animatecss-delay'))
                    delay = delayPreviously
                delay += 100
            })
        }
    }

    return PageAnimate;
})($);

export default PageAnimate;
