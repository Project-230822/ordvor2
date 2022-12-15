import $ from 'jquery';

function onReady()
{

	// Fix work of fancybox
	var scrollbarWidth = (window.innerWidth - document.documentElement.clientWidth);
	$(document)
		.on('beforeLoad.fb overlay.before_show', function(e, instance, slide)
		{
			$('.js-scroll-hidden-compensate')
				.css('margin-right', scrollbarWidth);
			// $('.js-fix-scroll')
			// 	.addClass('js-fix-scroll--fixed')
			// 	.css('padding-right', scrollbarWidth);
		});

	$(document)
		.on('afterClose.fb overlay.after_hide', function(e, instance, slide)
		{
			
			$('.js-scroll-hidden-compensate')
				.css('margin-right', 0);
			// if (!$.fancybox.getInstance())
			// {

			// 	$('.js-fix-scroll')
			// 		.removeClass('js-fix-scroll--fixed')
			// 		.css('padding-right', 0);
			// }
		});

	// Update captcha code
	$(document)
		.on('click', '[data-captcha-update-code]', function(e)
		{
			e.preventDefault();

			var $el = $(this);
			var $form = $el.closest('form');
			if (!$form.length)
			{
				retirn;
			}
			$.getJSON(RS.Options.siteDir + 'ajax/captcha.php', function(res)
			{
				var $img = $form.find('img[src*="/bitrix/tools/captcha.php"]')
				$img.attr('src', res.src);

				var $captchaSid = $form.find('input[name="captcha_sid"]');
				$captchaSid.val(res.code);
			})
		});
}

$(window)
	.ready(onReady);