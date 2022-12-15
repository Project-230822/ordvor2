function auth_show()
	{

        var show_box = $("#show-result");
        show_box.empty();

		$.ajax(
		{
			url: "/script/auth.php",
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

					/*
					$("#show_box").html(response);
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
					$('#show_box').css(cssObj);
					*/
				}
		});
	}

function auth_hide()
{
	if ($.cookie('auth_status') != null) $.cookie('auth_status', null, { path: '/' });
	$('#show_box').hide();
	$('.show_box').hide();
}

function auth_enter()
{
    var form = $('.authorize-form');
    var location = document.location.href;

	email = form.find('input[name=auth_email]').val();
	pass = md5(form.find('input[name=auth_pass]').val());

	$("#auth_status span").empty();

	$.ajax(
		{
		url: "/ajax/auth.php",
		type: "GET",
		data: { "location": location, "email": email, "pass": pass },
		cache: false,
		success: function(response)
			{
				if (response != '') $("#auth_status span").append(response);
			}
		});
}
	
$(function() {

	$('#auth_click').on('click', function(e){
		auth_show();
	});
	
	$('#show-result').on('click', '#auth_enter', function(e){
		auth_enter();
	});

	/*
	$('#show_box').on('keydown', '.auth_info_input input', function(e)
		{
		if (e.keyCode == 13) auth_enter();
		});

	*/

	/*
		
	if ($.cookie('auth_status') != null) $.cookie('auth_status', null, { path: '/' });
	

			
	$('#show_box').on('click', function(e)
		{
		if ($(e.target).attr('id')=='show_box') auth_hide();
		if ($(e.target).attr('id')=='auth_close') auth_hide();
		});
				
	$(document).on('keydown', function(e)
		{
		if ((e.keyCode == 27)&&($('#authbox').length == 1)) auth_hide();
		});
	*/
		
});