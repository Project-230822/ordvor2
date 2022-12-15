import $ from 'jquery'
import isDesktop from './isDesktop';

var $overlay;

function show() {
	var d = new $.Deferred();

	if (!$overlay)
	{
		$overlay = $('<div>');

		$overlay
			.css({
				'position': 'fixed',
				'opacity': '0',
				'width': '100%',
				'height': '100%',
				'top': '0',
				'left': '0',
				'right': '0',
				'bottom': '0',
				'background-color': 'rgba(0, 0, 0, 0.5)',
				'z-index': '9998',
				'cursor': 'pointer',
				'display': 'none'
			});


		$('body').append($overlay);

		if (isDesktop() && document.body.scrollHeight > window.innerHeight)
		{
			$('head').append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{padding-right:' + (window.innerWidth - document.documentElement.clientWidth) + 'px;}</style>');
		}
	}

	$(document).trigger('overlay.before_show');
	$('body').addClass('compensate-for-scrollbar');

	$overlay
		.show()
		.velocity({
			'opacity': 1
		}, {
			duration: 300,
			complete: function () {
				$(document).trigger('overlay.after_show');
				d.resolve($overlay);
			}
		});

	return d.promise();
}

function hide() {
	if (!$overlay) {
		return;
	}

	var d = new $.Deferred();

	$(document).trigger('overlay.before_hide');

	$overlay
		.velocity({
			'opacity': 0
		}, {
			duration: 300,
			complete: () => {
				$overlay.hide();
				d.resolve($overlay);
				$('body').removeClass('fancybox-active compensate-for-scrollbar');
				$(document).trigger('overlay.after_hide');
			}
		});

	return d.promise();
}

export {
	show,
	hide
};
