function regcheck_show(code)
	{
	$("#show_box").empty();
	$.ajax(
		{
		url: "/script/regcheck.php",
		type: "GET",
		data: { "code": code },
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

function regcheck_hide()
	{
	$('#show_box').hide();
	$('.show_box').hide();
	if ($.cookie('id_avt') != null) document.location = '/';
	}
		
$(function()
	{
	var act = $.getUrlVar('act');
	var code = $.getUrlVar('code');
	if (act == 'reg') regcheck_show(code);
		
	$('#regcheck_click').on('click', function(e)
		{
		regcheck_show();
		});
		
	$('#show_box').on('click', '#regcheck_enter', function(e)
		{
		regcheck_hide();
		});
				
	$('#show_box').on('click', function(e)
		{
		if ($(e.target).attr('id')=='show_box') regcheck_hide();
		if ($(e.target).attr('id')=='regcheck_close') regcheck_hide();
		});
				
	$(document).on('keydown', function(e)
		{
		if ((e.keyCode == 27)&&($('#regcheckbox').length == 1)) regcheck_hide();
		});
			
	});