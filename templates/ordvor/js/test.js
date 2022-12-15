function test_hide()
	{
	var date = new Date();
	date.setTime(date.getTime() + (60 * 60 * 1000 * 24));
	$.cookie("test_mode", '1', { expires: date, path: '/' });
	$('#container').removeAttr('style');
	$('#show_box2').hide();
	$('#show_box2').empty();
	$('.show_box2').hide();
	}
	
function test_show()
	{
	$.ajax(
		{
		url: "/script/test.php",
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
	if ($.cookie('test_mode') != '1') test_show();
	$('#show_box2').on('click', '#test_enter', function(e)
		{
		test_hide();
		});
	$('#show_box2').on('click', function(e)
		{
		if ($(e.target).attr('id')=='show_box2') test_hide();
		});
	$(document).on('keydown', function(e)
		{
		if ((e.keyCode == 27)&&($('#testbox').length == 1)) test_hide();
		});
		
	});