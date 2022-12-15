function archive_show(id_order)
	{
	$("#show_box").empty();
	$.ajax(
		{
		url: "/script/archive.php",
		type: "GET",
		data: { "id_order": id_order },
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

function archive_hide()
	{
	$('#show_box').hide();
	$('.show_box').hide();
	}
	
$(function()
	{
	
	$('.profile_archive_table_body').on('click', 'div:eq(0) span', function(e)
		{
		id_order = $(this).parents('.profile_archive_table_body').attr('data-id');
		archive_show(id_order);
		});
				
	$('#show_box').on('click', function(e)
		{
		if ($(e.target).attr('id')=='show_box') archive_hide();
		if ($(e.target).attr('id')=='archive_close') archive_hide();
		});
				
	$(document).on('keydown', function(e)
		{
		if ((e.keyCode == 27)&&($('#archivebox').length == 1)) archive_hide();
		});
		
	});