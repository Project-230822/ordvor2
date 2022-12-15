function Unloader()
	{
    var o = this;

    this.unload = function(evt)
		{
        var message = "Вы закрываете страницу сравнения.";
		if (typeof evt == "undefined") 
			{
            evt = window.event;
			}	
        if (evt) 
			{
            evt.returnValue = message;
			}
        return message;
		}	

    this.resetUnload = function()
		{
        $(window).off('beforeunload', o.unload);

        setTimeout(function()
			{
            $(window).on('beforeunload', o.unload);
			}, 1000);
		}

    this.init = function()
		{
        $(window).on('beforeunload', o.unload);

        $('a').on('click', o.resetUnload);
        $(document).on('submit', 'form', o.resetUnload);
		$(document).on('keydown', function(event)
			{
			if((event.ctrlKey && event.keyCode == 116) || event.keyCode == 116)
				{
				o.resetUnload();
				}
			});
		}
    this.init(); 
	}
	
function compare_alignment()
	{
	sum_table = $('.compare_table').length;
	$('#compare_table div > span').each(function(i)
		{
		height_main = $(this).height();
		for (k = 0; k < sum_table; k++)
			{
			height = $('.compare_table:eq('+k+') div:eq('+i+') > span').height();
			if (height > height_main) height_main = height;
			}
		height_main.toFixed();
		for (k = 0; k < sum_table; k++)
			{
			$('.compare_table:eq('+k+') div:eq('+i+') > span').height(height_main);
			}
		$('#compare_table div:eq('+i+') > span').height(height_main);	
		});
	}

function compare_delete(id_position, code)
	{	
	arr = new Object();
	arr['id_position'] = id_position;
	arr['code'] = code;
	
	$.ajax(
		{
		type: "POST",
		url: "/ajax/compare/delete.php",
		dataType: "json",
		data: JSON.stringify(arr),
		contentType: "application/json; charset=utf-8",
		traditional: true,
		cache: false,
		async: false,
		success: function(response, textStatus, jqXHR)
			{
			json_text = jqXHR.responseText;
			}
		});
	
	obj = new Object();
	obj = JSON.parse(json_text);
	var status = obj.status;
	
	switch (status) 
		{
		case 1:
		location.reload();
		break;
		
		case 2:
		document.location = '/';
		break;
		default:
		}	
	}
	
function compare_update()
	{	
	var date = new Date();
	date.setTime(date.getTime() + (60 * 60 * 1000));
	$.cookie("compare", "1", { expires: date, path: '/' });
			
	arr = new Object();
	arr['numb'] = $('input[name=compare_numb]').val();
	
	$.ajax(
		{
		type: "POST",
		url: "/ajax/compare/update.php",
		dataType: "json",
		data: JSON.stringify(arr),
		contentType: "application/json; charset=utf-8",
		traditional: true,
		cache: false,
		async: false,
		success: function(response, textStatus, jqXHR)
			{
			json_text = jqXHR.responseText;
			}
		});
	
	obj = new Object();
	obj = JSON.parse(json_text);
	var status = obj.status;
	
	switch (status) 
		{
		case 1:
		location.reload();
		break;
		
		case 2:
		break;
		default:
		}	
	}
	
$(function()
	{
	var date = new Date();
	date.setTime(date.getTime() + (60 * 60 * 1000));
	$.cookie("compare", "1", { expires: date, path: '/' });
	
	setInterval(function()
		{
		compare_update();
		}, 5000);
		
	compare_alignment();
	$(window).on('resize', function()
		{
		compare_alignment();
		});
		
	$('.compare-slider').on('click', '.compare_delete', function(e)
		{
		arr = $(this).closest('.compare-position').attr('data-id').split('_');
		var id_position = arr[0];
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		compare_delete(id_position, code);
		});
		
	
	//if (typeof window.obUnloader != 'object') window.obUnloader = new Unloader();
	
	$(window).bind('beforeunload', function()
		{
		$.cookie("compare", null, { path: '/' });
		});	
	});