import $ from 'jquery';

const sidebarMenu = ($ => {

  const DefaultOptions = {
    loadingDelay: 800,
    selectors: {
      stickySidebar: '.js-sticky-sidebar',
      sidebarNav: '.js-sidebar-nav',
    },
  }

  class sidebarMenu {
    constructor(options) {
      this.options = $.extend({}, DefaultOptions, options);
      this.init();
    }

    init() {
      var _this = this
      this.$window = $(window)

      setTimeout(function(){
        $(_this.options.selectors.sidebarNav).addClass('is-loaded')
        window.addEventListener('scroll', _this.scroll.bind(_this), false)
      }, _this.options.loadingDelay)
      this.sticky()
    }

    hide() {
      $(this.options.selectors.sidebarNav).addClass('is-hide')
    }

    show() {
      $(this.options.selectors.sidebarNav).addClass('is-loaded').removeClass('is-hide')
      this.absolute()
    }

    scroll() {
      this.sticky()
    }

    sticky() {
      this.$footer = $('footer')

      if (this.$footer.length < 1 || $(this.options.selectors.stickySidebar).hasClass('stop'))
        return;

      var scrollVal = this.$window.scrollTop(),
        $sticky = $(this.options.selectors.stickySidebar),
        footerOffsetTop = this.$footer.offset().top
if ($(this.options.selectors.stickySidebar).hasClass('sticky-sidebar-absolute')){
	$sticky.css({
		position: '',
        top: '',
        bottom: '',
        transform: '',
          
        })
	
}
else{
      if (
        (scrollVal + this.$window.height()/2) > ($sticky.offset().top + $sticky.height()/2)
        || (footerOffsetTop < ($sticky.offset().top + $sticky.height()))
      ) {
        $sticky.css({
         position: 'absolute',
          top: 'auto',
          bottom: this.$footer.height(),
          transform: 'translateY(0)',
        })
      } else {
        $sticky.css({
			 position: '',
          top: '',
          bottom: '',
          transform: '',
          
        })
      }
}
    }

    absolute() {
      var absoluteTopElement = $('.absoluteTop')
      if (absoluteTopElement.length > 0){
        this.absoluteTop();
      }
    }
    absoluteTop() {
      $('.js-sticky-sidebar').addClass('sticky-sidebar-absolute');
    }


  }

  return sidebarMenu;
})($);

export default sidebarMenu;



/*
export function scrollStop(doc) {
	var windowHeight;
	var docIn = doc;

  // var absoluteTop = function absoluteTop() {
  //     $('.stickys').css({'position': "absolute", top: "11%", transform: "none"})
  // }

  var Ascroll = function Ascroll() {
    var $stickys = $(docIn).find('.stickys'),
        scrollVal = $(window).scrollTop(),
        windowHeight = $(window).height(),
        footerTop = $(docIn).find('.l-footer').offset().top,
        divHeight = $stickys.height(),
        divBottom = $stickys.offset().top + divHeight,
        windows50 = scrollVal + windowHeight / 2 + divHeight / 2,
        hClass = $stickys.hasClass('slipFooter'),
        sm = 10;

    if (footerTop > scrollVal + windowHeight) {
      $stickys.css({
        // transform: 'translateY(50%)',
        bottom: '50%',
      });
    } else {
      if (divBottom >= (footerTop - sm)) {
        $stickys.css('bottom', scrollVal + windowHeight - footerTop + sm);
        $stickys
          // .css('transform', "none")
          .addClass('slipFooter')
      } else {
        if (hClass) {
          if (divBottom < windows50) {
            $stickys.css('bottom', scrollVal + windowHeight - footerTop + sm);
          } else {
            $stickys.removeClass('slipFooter');
          }
        } else {
          if ((footerTop - sm - divBottom) >= divHeight / 2) {
            // $stickys.css('transform', "translateY(50%)");
            $stickys.css('bottom', "50%");
          }
        }
      }
    }
  }

	$(window).resize(function(){
		 windowHeight = $(window).height();
		if (windowHeight < 600) {
			$('.sidebar-nav').css('top', '0')
		} else {
			$('.sidebar-nav').css('top', '50%')
		}
	})

  // if ($("div").hasClass("absoluteTop")) {
  //   absoluteTop();
  // } else {
    if ($("footer").hasClass("l-footer")) {
        window.addEventListener('scroll', Ascroll, false)
        Ascroll()
    } else {
        $('.stickys').css({
            // transform: 'translateY(50%)',
            bottom: '50%'
        })
    }
  // }

  // if ($("div").hasClass("black")) {
  //   $("body").removeClass('body--dark');
  //   $("body").addClass('body--light');
  // }

	$(document).on('click', '.sidebar-nav__link', function(e){
		var $link = $(e.currentTarget)
		$link.closest('ul').find('.sidebar-nav__link.selected').removeClass('selected')
		$link.addClass('selected')
	})
}
*/
