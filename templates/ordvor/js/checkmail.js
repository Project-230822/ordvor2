function checkmail_show()
	{


	var show_box = $("#show-result2");
	show_box.empty();

	$.ajax(
		{
		url: "/script/checkmail.php",
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
			}
		});
	}

function checkmail_hide()
	{
	$('#show_box').hide();
	$('.show_box').hide();
	}
		
$(function()
	{
		
	$('#checkmail_click').on('click', function(e)
		{
		checkmail_show();
		});
		
	$('#show_box').on('click', '#checkmail_enter', function(e)
		{
		checkmail_hide();
		});
		
	$('#show_box').on('click', function(e)
		{
		if ($(e.target).attr('id')=='show_box') checkmail_hide();
		if ($(e.target).attr('id')=='checkmail_close') checkmail_hide();
		});
				
	$(document).on('keydown', function(e)
		{
		if ((e.keyCode == 27)&&($('#checkmailbox').length == 1)) checkmail_hide();
		});
			
	});