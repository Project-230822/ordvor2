function reg_show()
{

	var show_box = $("#show-result");
	show_box.empty();
	$.ajax(
	{
	url: "/script/reg.php",
	type: "GET",
	data: {},
	cache: false,
	success: function(response)
		{

            show_box.html(response);

		$.magnificPopup.open({
			items: {
				src: show_box, // can be a HTML string, jQuery object, or CSS selector
				type: 'inline'
			}
		});

            onloadCallback();

		/*
		$('.show_box').width($(document).width()).height($(document).height());
		$('.show_box').show();
		top_size = $(window).scrollTop() + $(window).height() / 5;
		left_size = $(window).scrollLeft();
		var cssObj =
			{
			'display' : 'block',
			'top' : top_size + 'px',
			'left' : left_size + 'px'
			};
		$('#show_box').css(cssObj);*/
		}
	});
}

function reg_hide()
{
	if ($.cookie('reg_status') != null) $.cookie('reg_status', null, { path: '/' });
	$('#show_box').hide();
	$('.show_box').hide();
}

function reg_enter()
{

    // var form = $('.registration-form');
    // var location = document.location.href;
    //
	// var email = form.find('input[name=reg_email]').val();
	// var pass = form.find('input[name=reg_pass]').val();
	// var repeatpass = form.find('input[name=reg_repeatpass]').val();
	// var agreement = form.find('input[name=agreement]:checked').length > 0 ? 'Y' : '';

    var form = jQuery('.regform');

    console.log(form.serialize());

	$("#reg_status span").empty();
	$.ajax(
		{
		url: "/ajax/reg.php",
		type: "POST",
		data: form.serialize(),
		cache: false,
		success: function(response)
			{
				console.log(response);
			if (response != '' && response != 'ok'){ $("#reg_status span").append(response)};

			if (response == 'ok') {checkmail_show()};
			}
		});
}

var onloadCallback = function() {

    var recaptcha = jQuery('.g-recaptcha');
    var public_key = recaptcha.attr('data-sitekey');
    var ids = [];

    recaptcha.each(function() {
        var id = jQuery(this).attr('id');
        ids.push(id);
    });

    jQuery.each(ids, function(index, value) {
        var widgetId = grecaptcha.render(value, {
            'sitekey' : public_key,
            'callback' : onSubmit,
        });

        var form = jQuery('#' + value).parents('form').attr('id');
        jQuery('#' + form).submit(function() {
            grecaptcha.execute(widgetId);
            return true;
        });
    });

    var onSubmit = function(token) {
    };
}

$(function(){

	$('#reg_click').on('click', function(e)
	{
		reg_show();
	});


	$('#show-result').on('click', '#reg_enter', function(e)
	{
		reg_enter();
	});


	/*
	$('#show_box').on('keydown', '.reg_info_input input', function(e)
		{
		if (e.keyCode == 13) reg_enter();
		});

	if ($.cookie('reg_status') != null) $.cookie('reg_status', null, { path: '/' });



	$('#show_box').on('click', function(e)
		{
		if ($(e.target).attr('id')=='show_box') reg_hide();
		if ($(e.target).attr('id')=='reg_close') reg_hide();
		});

	$(document).on('keydown', function(e)
	{
		if ((e.keyCode == 27)&&($('#regbox').length == 1)) reg_hide();
	});
	*/

});