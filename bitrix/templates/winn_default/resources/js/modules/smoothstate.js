import $ from 'jquery';
import Barba from 'barba.js';
import PageAnimate from '../modules/page-animate';

const smoothState = ($ => {

	const defaultPageOutEffect = 'pageOutLine';
	const defaultPageInEffect = 'pageInLine';

	const HideShowTransition = Barba.BaseTransition.extend({
		start: function() {
			Promise
				.all([this.newContainerLoading, this.fadeOut()])
				.then(this.fadeIn.bind(this));
		},

		fadeOut: function() {

			let deferred = Barba.Utils.deferred(),
				$oldContainer = $(this.oldContainer),
				$dataContainer = $oldContainer.find('.js-smoothData'),
				offsetY = window.pageYOffset,
				animationName = defaultPageOutEffect;

			if (offsetY < 1 && !!$dataContainer.data('page_hide_effect_first_screen'))
			{
				animationName = $dataContainer.data('page_hide_effect_first_screen');
			}
			else if (!!$dataContainer.data('page_hide_effect_second_screen'))
			{
				animationName = $dataContainer.data('page_hide_effect_second_screen');
			}

			this.scrollbarRepaint($(this.oldContainer).find('.js-smooth-content'));

			let animation = new PageAnimate({
				animation: animationName,
				durationOut: 2500,
				onComplete: function(){
					document.body.className = '';
					deferred.resolve();
				}
			});

			animation.start();

			return deferred.promise;
		},

		fadeIn: function()
		{
			let $dataContainer = $(this.newContainer).find('.js-smoothData'),
				animationName = defaultPageInEffect;


			if (!!$dataContainer.data('page_show_effect'))
			{
				animationName = $dataContainer.data('page_show_effect');
			}

			$(this.oldContainer).hide();
			$(this.newContainer).css({visibility: 'visible'});

			this.scrollbarRepaint($(this.newContainer).find('.js-smooth-content'));
			
			setTimeout(() => {
				$('html').css({'overflow-y': ''});
				$('html').css({width: '', height: '', position: ''});
				$(document).scrollTop(0);
			}, 10);
			
			let animation = new PageAnimate({
				animation: animationName,
				onComplete: () => {
					this.done();
				}
			});

			animation.start();
		},

		
        scrollbarRepaint($siteContent)
        {
            let $html = $('html'),
                $win = $(window),
                winH = $win.height();

            if ($siteContent.height() > winH)
            {
                $html.css({'overflow-y': 'scroll'});
            }
            else
            {
                $html.css({'overflow-y': ''});
            }

            // $body.css({width: '', height: '', position: ''});
            // var scrollBarWidth =  window.innerWidth - $body.width();
            // $body.css({width: window.innerWidth - scrollBarWidth, height: window.innerHeight, position: 'fixed'});
            // $html.css({'margin-top': offsetY * -1});       
        }
	});

	class smoothState {
		constructor() {
			this.init();
			this.scripts = [];
			this.HTMLElementContainer = null;
		}

		init() {

			let usePageLoadAnimation = (RS.Options || {}).usePageLoadAnimation;
			usePageLoadAnimation = usePageLoadAnimation !== undefined && usePageLoadAnimation

			if ($('#bx-panel').length > 0 || !usePageLoadAnimation)
				return;

			Barba.Pjax.cacheEnabled = false;
			Barba.Pjax.start();

			// Barba.Prefetch.init();

			Barba.Pjax.getTransition = function() {
				return HideShowTransition;
			};

			Barba.Dispatcher.on('newPageReady', (currentStatus, prevStatus, HTMLElementContainer, newPageRawHTML) => {

				var $newPageHead = $( '<html />' ).html(
					$.parseHTML(newPageRawHTML, document, true)
				);

				var headTags = [
					"link[href]"
					, "script[src]"
					].join(',');

				var $currentTags = $(document).find(headTags),
					$newTags = $newPageHead.find(headTags);
				
				// add new tags
				$newTags.filter((indexNewItem, newItem) => {

					return $currentTags.filter((indexCurrentItem, currentItem) => {
						return currentItem.outerHTML == newItem.outerHTML;
					}).length == 0;

				}).appendTo('head');

				// remove unused tags
				// $currentTags.filter((indexCurrentItem, currentItem) => {
				// 	return $newTags.filter((indexNewItem, newItem) => {
				// 		return currentItem.outerHTML == newItem.outerHTML;
				// 	}).length == 0;
				// }).remove();

				let processed = BX.processHTML(newPageRawHTML, false);
				this.scripts = processed.SCRIPT;

				this.HTMLElementContainer = HTMLElementContainer;
				

				if (RS.Panel.openned)
				{
					RS.Panel.close();
				}

				if ($.fancybox.getInstance())
				{
					$.fancybox.close();
				}
			});
		  
			Barba.Dispatcher.on('transitionCompleted', (currentStatus, prevStatus) => {
				BX.ajax.processScripts(this.scripts);
				this.scripts = [];

				window.OnLoadPage(this.HTMLElementContainer);
			});

			Barba.Dispatcher.on('linkClicked', function(element, event){
			});
		}
	}

	return smoothState;
})($);

export default smoothState;
