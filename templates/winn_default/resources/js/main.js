import $ from 'jquery'
import init from './app/init'
import SmoothState from './modules/smoothstate';
import Barba from 'barba.js';
import _debounce from 'lodash/debounce';
import isDesktop from './utils/isDesktop';
import AOS from 'aos';

import './modules/jquery.animatecss.js';
import './global';
import './events';

// page on ready
function onReady()
{
	if (isDesktop())
	{
		new SmoothState();
	}

	window.OnLoadPage();
		
	Barba.Dispatcher.on('linkClicked', function(currentStatus, prevStatus, HTMLElementContainer, newPageRawHTML){
	//	 CloseAll();
	});
	
	//ScrollerTop
	$(document).on('click', '#js-scroller-arrow', function() {
		scrollerFooterArrow.scroll(0, 1000);
	});
}

// composite data recieved
function onFrameDataReceived(json = {})
{
	if (!(json.dynamicBlocks || []).length)
	{
		return;
	}

	json.dynamicBlocks.forEach((block, index) =>
	{
		init(document.querySelector(block.ID));
	});
}

$(document).ready(onReady);
if (window.frameCacheVars !== undefined)
{
	BX.addCustomEvent("onFrameDataReceived", (json) => onFrameDataReceived(json));
}

window.OnLoadPage = function (HTMLElementContainer)
{
	var doc;
	if ($(HTMLElementContainer).length > 0)
	{
		doc = HTMLElementContainer;
		let $dataContainer = $(doc).find('.js-smoothData');

		$(document.body).attr('class', $dataContainer.data('body-class'));
	}
	else
	{
		doc = document;
	}

	init(doc);
	
	setTimeout(() => {

		$(document.body).addClass('is-loaded');
		
		if (document.documentElement.scrollHeight > document.documentElement.clientHeight)
		{
			$(document).find('[data-scroll-notify]').show().on('click', () => {
			});
		}
		else
		{
			$(document).find('[data-scroll-notify]').hide();
		}

		AOS.init({
			mirror: true,
		});

	}, 200);

	$(function () {
		$.extend($.easing,{ easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;}});

		var options = {
			section : '[data-section]',
			sectionName : false,
			interstitialSection : '[data-section="interstitial"]',
			easing: 'easeInOutCubic',
			scrollSpeed: 700,
			offset : 1,
			scrollbars: true,
			standardScrollElements: '',
			setHeights: false,
			overflowScroll: true,
			before:function() {},
			after:function() {},
			afterResize:function() {},
			afterRender:function() {
				window.scrollifyInitialized = true;
				$('body').addClass('is-fp-scrolling');
			}
		};
	
		function checkInit()
		{
			if (
				($(window).innerWidth() < 1220 || $(window).innerHeight() < 760) && window.scrollifyInitialized
				|| $('#bx-panel').length > 0
				|| $(doc).find(options.section + ':not('+ options.interstitialSection +')').length < 1
				|| document.body.scrollHeight <= window.innerHeight
				
			)
			{
				destroy();
			}
			else if ($(window).innerWidth() >= 1220 && $(window).innerHeight() > 760 && !window.scrollifyInitialized)
			{
				$.scrollify(options);
			}
		}

		function destroy()
		{
			$.scrollify.destroy();
			window.scrollifyInitialized = false;
			$('body').removeClass('is-fp-scrolling');
		}

		checkInit();

		$(document).on('overlay.after_show', function(e, instance, slide) {
			destroy();
		});

		$(document).on('overlay.after_hide', function(e, instance, slide) {
			checkInit();
		});

		$(window).on('resize', _debounce(checkInit, 100));
	});

	$(function () {

		let sections = document.querySelectorAll('[data-section]:not([data-section="interstitial"])');
	
		function checkScroll()
		{
			let windowSize = BX.GetWindowSize(),
				windowCenter = windowSize.scrollTop + windowSize.innerHeight / 2,
				deltas = [];

			for (let i in sections)
			{
				
				if (sections.hasOwnProperty(i) && BX.type.isDomNode(sections[i]))
				{
					let sectionPos = BX.pos(sections[i]),
						sectionCenter = sectionPos.top + sectionPos.height / 2;

					deltas[i] = Math.abs(windowCenter - sectionCenter);
				}
			}

			let minDelta = Math.min.apply(null, deltas);
			let activeIndex = deltas.indexOf(minDelta);
			let activeSection = sections[activeIndex];

			if (activeSection != undefined && ($(activeSection).hasClass('l-section--light') || activeSection.getAttribute('data-contrast') !== null))
			{
				$('.l-contrast').addClass('l-contrast--light');
			}
			else
			{
				$('.l-contrast').removeClass('l-contrast--light');
			}
			
			// if (activeIndex == 0)
			// {
			// 	this.isExpandSideMenu = true;
			// 	BX.addClass(this.obMenu, 'side-menu--expand');
			// }
			// else if (BX.hasClass(this.obMenu, 'side-menu--expand'))
			// {
			// 	this.isExpandSideMenu = false;
			// 	if (!this.isHoverSideMenu)
			// 	{
			// 		BX.removeClass(this.obMenu, 'side-menu--expand');
			// 	}
			// }
		}

		checkScroll();
		$(window).on('scroll', _debounce(checkScroll, 100));
		
	});
}