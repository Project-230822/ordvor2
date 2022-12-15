function remindme_show()
	{

		var show_box = $("#show-result");
        $.magnificPopup.close();
        show_box.empty();

		$.ajax(
			{
			url: "/script/remindme.php",
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

function remindme_hide()
	{
	if ($.cookie('remindme_status') != null) $.cookie('remindme_status', null, { path: '/' });
	$('#show_box').hide();
	$('.show_box').hide();
	}
	
function remindme_enter()
	{
	email = $('input[name=remindme_email]').val();
	var location = document.location.href;
	
	$("#remindme_status span").empty();
	$.ajax(
		{
		url: "/ajax/remindme.php",
		type: "GET",
		data: { "location": location, "email": email },
		cache: false,			
		success: function(response)
			{
			if (response != '') $("#remindme_status span").append(response);
			if ($.cookie('remindme_status') == '1') checkmail2_show();
			}
		});	
	}
	
$(function()
	{
	
	$('#show-result').on('click', '#remindme_enter', function(e)
		{
		remindme_enter();
		});
		
	$('#show_box').on('keydown', '.remindme_info_input input', function(e)
		{
		if (e.keyCode == 13) remindme_enter();
		});
	
	if ($.cookie('remindme_status') != null) $.cookie('remindme_status', null, { path: '/' });
	
	$('#show-result').on('click', '#auth_remindme', function(e)
		{
		remindme_show();
		});
				
	$('#show_box').on('click', function(e)
		{
		if ($(e.target).attr('id')=='show_box') remindme_hide();
		if ($(e.target).attr('id')=='remindme_close') remindme_hide();
		});
				
	$(document).on('keydown', function(e)
		{
		if ((e.keyCode == 27)&&($('#remindmebox').length == 1)) remindme_hide();
		});
			
	});