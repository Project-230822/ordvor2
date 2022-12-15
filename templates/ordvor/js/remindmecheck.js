function remindmecheck_show(code)
	{
	$("#show_box").empty();
	$.ajax(
		{
		url: "/script/remindmecheck.php",
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

function remindmecheck_enter(code)
	{
	pass = $('input[name=remindmecheck_pass]').val();
	repeatpass = $('input[name=remindmecheck_repeatpass]').val();
	
	$("#remindmecheck_status span").empty();
	$.ajax(
		{
		url: "/ajax/remindmecheck.php",
		type: "GET",
		data: { "code": code, "pass": pass, "repeatpass": repeatpass },
		cache: false,			
		success: function(response)
			{
			if (response != '') $("#remindmecheck_status span").append(response);
			}
		});
	}
	
function remindmecheck_hide()
	{
	$('#show_box').hide();
	$('.show_box').hide();
	if ($.cookie('id_avt') != null) document.location = '/';
	}
		
$(function()
	{
	var act = $.getUrlVar('act');
	var code = $.getUrlVar('code');
	if (act == 'remindme') remindmecheck_show(code);
			
	$('#show_box').on('click', '#remindmecheck_enter', function(e)
		{
		remindmecheck_enter(code);
		});
		
	$('#show_box').on('click', '#remindmecheck_enter2', function(e)
		{
		remindmecheck_hide();
		});
		
	$('#show_box').on('click', function(e)
		{
		if ($(e.target).attr('id')=='show_box') remindmecheck_hide();
		if ($(e.target).attr('id')=='remindmecheck_close') remindmecheck_hide();
		});
				
	$(document).on('keydown', function(e)
		{
		if ((e.keyCode == 27)&&($('#remindmecheckbox').length == 1)) remindmecheck_hide();
		});
			
	});