function maintenance_show()
	{
	$("#show_box2").empty();
	$.ajax(
		{
		url: "/script/maintenance.php",
		type: "GET",
		data: {},
		cache: false,			
		success: function(response)
			{	
			$("#show_box2").html(response);
			$('.show_box2').width($(window).width() + 20).height($(window).height());
			$('.show_box2').show();
			top_size = $(window).scrollTop() + $(window).height() / 4;
			left_size = $(window).scrollLeft();
			var cssObj = 
				{
				'position' : 'fixed',
				'display' : 'block',
				'top' : top_size + 'px',
				'left' : left_size + 'px'
				};
			$('#show_box2').css(cssObj);
			$('#container').css(
				{
				'overflowY' : 'hidden',
				'overflowX' : 'auto',
				'height' : $(window).height() + 'px',
				});
			}
		});
	}

$(function()
	{
		
	maintenance_show();		
			
	});