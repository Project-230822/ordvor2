function shopadd_show()
	{
	$("#show_box").empty();
	$.ajax(
		{
		url: "/script/shopadd.php",
		type: "GET",
		data: { },
		cache: false,			
		success: function(response)
			{	
			$("#show_box").html(response);
			$('.show_box').width($(document).width()).height($(document).height());
			$('.show_box').show();
			top_size = $(window).height() / 3;
			left_size = $(window).scrollLeft();
			var cssObj = 
				{
				'display' : 'block',
				'top' : top_size + 'px',
				'left' : left_size + 'px',
				'position': 'fixed'
				};
			$('#show_box').css(cssObj);
			}
		});
	}

function shopadd_hide()
	{
	$('#show_box').hide();
	$('.show_box').hide();
	}
		
$(function()
	{		
	$('#show_box').on('click', '#shopadd_continue', function(e)
		{
		shopadd_hide();
		});
		
	$('#show_box').on('click', '#shopadd_order', function(e)
		{
		shopadd_hide();
		return true;
		});
		
	$('#show_box').on('click', function(e)
		{
		if ($(e.target).attr('id')=='shopadd_close') shopadd_hide();
		});
				
	$(document).on('keydown', function(e)
		{
		if ((e.keyCode == 27)&&($('#shopaddbox').length == 1)) shopadd_hide();
		});
			
	});