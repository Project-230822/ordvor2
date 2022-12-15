function error_captcha() 
	{
	var src = '/lib/ajax_captcha/create_image.php?' + Math.random();
	$('#errorcaptcha').attr('src', src);
	}
	
function error_show()
	{
	page = document.location.href;
	$("#show_box").empty();
	$.ajax(
		{
		url: "/script/error.php",
		type: "GET",
		data: { "page": page },
		cache: false,			
		success: function(response)
			{	
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
			}
		});
	}

function error_hide()
	{
	if ($.cookie('error_status') != null) $.cookie('error_status', null, { path: '/' });
	$('#show_box').hide();
	$('.show_box').hide();
	}
	
function error_enter()
	{
	var code = $('input[name=error_code]').val();
	var status_captcha;
	
	$.ajax(
		{
		url: "/lib/ajax_captcha/captcha.php",
		type: "GET",
		data: { "code": code },
		cache: false,
		async: false,
			success: function(response)
			{
			status_captcha = parseInt(response);
			}
		});	
	
	if (status_captcha == 0)
		{
		$("#error_status span").empty();
		$("#error_status span").append('Введите правильный текст с картинки');
		error_captcha();
		return false;
		}
	
	var page = $('input[name=error_page]').val();
	var descr = $('textarea[name=error_descr]').val();
	var name = $('input[name=error_name]').val();
	var email = $('input[name=error_email]').val();
	var location = document.location.href;
	
	$("#error_status span").empty();
	$.ajax(
		{
		url: "/ajax/error.php",
		type: "GET",
		data: { "page": page, "descr": descr, "name": name, "email": email, "location": location },
		cache: false,			
		success: function(response)
			{
			$("#error_status span").append(response);
			}
		});	
	}
	
$(function()
	{
	
	$('#show_box').on('click', '#error_captcha_refresh span', function(e)
		{
		error_captcha();
		});
		
	$('#show_box').on('click', '#error_enter', function(e)
		{
		error_enter();
		});
		
	$('#show_box').on('keydown', '.error_info_input input', function(e)
		{
		if (e.keyCode == 13) error_enter();
		});
	
	if ($.cookie('error_status') != null) $.cookie('error_status', null, { path: '/' });
	
	$('#catalog_error').on('click', function(e)
		{
		error_show();
		});
				
	$('#show_box').on('click', function(e)
		{
		if ($(e.target).attr('id')=='show_box') error_hide();
		if ($(e.target).attr('id')=='error_close') error_hide();
		});
				
	$(document).on('keydown', function(e)
		{
		if ((e.keyCode == 27)&&($('#errorbox').length == 1)) error_hide();
		});
			
	});