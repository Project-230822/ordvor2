function checkmail2_show()
	{
	$("#show_box").empty();
	$.ajax(
		{
		url: "/script/checkmail2.php",
		type: "GET",
		data: {},
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

function checkmail2_hide()
	{
	$('#show_box').hide();
	$('.show_box').hide();
	}
		
$(function()
	{
		
	$('#checkmail2_click').on('click', function(e)
		{
		checkmail2_show();
		});
		
	$('#show_box').on('click', '#checkmail2_enter', function(e)
		{
		checkmail2_hide();
		});
		
	$('#show_box').on('click', function(e)
		{
		if ($(e.target).attr('id')=='show_box') checkmail2_hide();
		if ($(e.target).attr('id')=='checkmail2_close') checkmail2_hide();
		});
				
	$(document).on('keydown', function(e)
		{
		if ((e.keyCode == 27)&&($('#checkmail2box').length == 1)) checkmail2_hide();
		});
			
	});