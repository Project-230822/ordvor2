function cat_hide()
	{
	$('#show_box').hide();
	$('.show_box').hide();
	}

$(function()
	{
	
	/*$('.main_catalog_list').on('click', function(e)
		{
		cat = $(this).attr('data-id');
		if (cat != '712')
			{
			$("#show_box").empty();
			$.ajax(
				{
				url: "/script/cat.php",
				type: "GET",
				data: { "cat": cat },
				cache: false,			
				success: function(response)
					{
					$("#show_box").html(response);
					$('.show_box').width($(document).width()).height($(document).height());
					$('.show_box').show();
					top_size = $(window).scrollTop() + $(window).height() / 10;
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
		else
			{
			document.location = '/sale/';	
			}
		});*/
	
		
	$('#show_box').on('click', function(e)
		{
		if ($(e.target).attr('id')=='show_box') cat_hide();
		if ($(e.target).attr('id')=='cat_close') cat_hide();
		});
				
	$(document).on('keydown', function(e)
		{
		if ((e.keyCode == 27)&&($('#show_box .cat_box').length == 1)) cat_hide();
		});
		
	});