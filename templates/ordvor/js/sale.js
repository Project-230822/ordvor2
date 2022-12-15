var click_submit_show = 0;
function submit_show(left, top)
	{		
	arr = new Object();
	
	$('.catalog_filter').find('.catalog_filter_rangelist').each(function(e)
		{
		range_list = $(this);
		slider_range = range_list.find('div[id$=range]');
		param = slider_range.attr('id').replace('-range', '');
		min = slider_range.slider("values", 0);
		max = slider_range.slider("values", 1);
		arr[param] = min + ";" + max;
		});
					
	$('.catalog_filter').find('.catalog_filter_checklist').each(function(e)
		{
		check_list = $(this);
		var length = check_list.find('.catalog_filter_checkbox input:checkbox:checked').length;
		if (length != 0)
			{
			i = 0;
			id_feature = check_list.attr('data-id');
			if (id_feature == 'cat') param = 'cat';
			else if (id_feature == 'brand') param = 'brand'; 
			else param = 'param' + id_feature;
			arr[param] = '';
			check_list.find('.catalog_filter_checkbox input:checkbox:checked').each(function(e)
				{
				if (i > 0) arr[param] += ";";
				arr[param] += $(this).attr('name').replace('catalog_' + param + '_', '');
				i++;
				});
			}
		});
	$('.catalog_filter').find('.catalog_filter_radiolist').each(function(e)
		{
		radio_list = $(this);
		var length = radio_list.find('.catalog_filter_radio input:radio:checked').length;
		if (length != 0)
			{
			id_feature = radio_list.attr('data-id');
			param = 'param' + id_feature;
			arr[param] = radio_list.find('.catalog_filter_radio input:radio:checked').val();
			}
		});
			
	var json_text;
	$.ajax(
		{
		type: "POST",
		url: "/ajax/sale/numb.php",
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
	var numb = parseInt(obj.numb);
	
	$('#catalog_bubble_numb span').html(numb);
			
	if (click_submit_show > 1) clearTimeout(submit_bubble_hide);
	$('#catalog_bubble_submit').fadeIn("fast");
	$('#catalog_bubble_submit').css("top",(top) + "px").css("left",(left) + "px");
	submit_bubble_hide = setTimeout(function()
		{
		submit_hide();
		}, 10000);
	click_submit_show++;
	}
		
function submit_hide()
	{
	$('#catalog_bubble_submit').fadeOut("normal");
	}

	
$(function()
	{
		
	$('#catalog_sortkind_tile:not(.active), #catalog_sortkind_table:not(.active)').on('click', function(e)
		{
		kind = parseInt($('input[name=sort_kind]').val());
		if (kind == 1) kind = 2; else kind = 1;
		page = $.getUrlVar('page');
		locating = document.location.pathname + document.location.search;
		search = document.location.search;
		if (search == '') sign = '?'; else sign = '&';
		
		if (page != undefined)
			{
			str_page = 'page=' + page;
			locating = locating.replace('&' + str_page, '');
			locating = locating.replace('?' + str_page, '');
			}
			
		if (strpos({str: locating, find: 'kind', index: 1})==null)
			{
			locating = locating + sign + "kind=" + kind;
			}
		else
			{
			var value = $.getUrlVar('kind');
			locating = locating.replace("kind=" + value, "kind=" + kind);
			}
			
		document.location = locating;
		});
		
	$('.catalog_filter').find('.catalog_filter_checklist').each(function(e)
		{
		checkbox = $(this).find('.catalog_filter_checkbox');
		var checkbox_checked_length = checkbox.find('input:checkbox:checked').length;
		if (checkbox_checked_length > 0) $(this).parents('.catalog_filter').find('.catalog_filter_clear').show();
		});
			
	$('.catalog_filter').find('.catalog_filter_radiolist').each(function(e)
		{
		radio = $(this).find('.catalog_filter_radio');
		var radio_checked_length = radio.find('input:radio:checked').length;
		if (radio_checked_length > 0) $(this).parents('.catalog_filter').find('.catalog_filter_clear').show();
		});
		


	$("#catalog_sort_type").chosen({no_results_text: "Результаты не соответствуют", width: "240px"});
	$("#catalog_sort_prior").chosen({no_results_text: "Результаты не соответствуют", width: "80px"});
	$("#catalog_sort_kind").chosen({no_results_text: "Результаты не соответствуют", width: "80px"});
	
	$('.catalog_filter_clear').on('click', function(e)
		{
		var length = $(this).parents('.catalog_filter').find('.catalog_filter_rangelist').length;
		if (length == 1)
			{
			range_list = $(this).parents('.catalog_filter').find('.catalog_filter_rangelist');
			slider_range = range_list.find('div[id$=range]');
			var min = slider_range.slider("option", "min");
			var max = slider_range.slider("option", "max");
			slider_range.slider("values", 0, min);
			slider_range.slider("values", 1, max);
			range_list.find('input[name$=min]').val(min);
			range_list.find('input[name$=max]').val(max);
			$(this).hide();
			}
		var length = $(this).parents('.catalog_filter').find('.catalog_filter_checklist').length;
		if (length == 1)
			{
			check_list = $(this).parents('.catalog_filter').find('.catalog_filter_checklist');
			check_list.find('.catalog_filter_checkbox').each(function(e)
				{
				$(this).find('input').removeAttr('checked');
				$(this).find('input').removeAttr('disabled');
				});
			$(this).hide();
			}
		var length = $(this).parents('.catalog_filter').find('.catalog_filter_radiolist').length;
		if (length == 1)
			{
			radio_list = $(this).parents('.catalog_filter').find('.catalog_filter_radiolist');
			radio_list.find('.catalog_filter_radio').each(function(e)
				{
				$(this).find('input').removeAttr('checked');
				$(this).find('input').removeAttr('disabled');
				});
			$(this).hide();
			}
			
		var left = $(this).parents('.catalog_filter').position().left + $(this).parents('.catalog_filter').find('.catalog_filter_title').width();
		var top = $(this).parents('.catalog_filter').position().top + $(this).parents('.catalog_filter').find('.catalog_filter_title').position().top;
		submit_show(left, top);
		});
		
		
	$('#catalog_bubble_click').on('mouseover', function(e)
		{
		$(this).parents('#catalog_bubble_submit').addClass('hover');	
		});
		
	$('#catalog_bubble_click').on('mouseout', function(e)
		{
		$(this).parents('#catalog_bubble_submit').removeClass('hover');	
		});		
		
	$('.catalog_filter_checkbox input').on('change', function(e)
		{
			

		checkbox = $(this).parents('.catalog_filter_checklist').find('.catalog_filter_checkbox');
		var checkbox_checked_length = checkbox.find('input:checkbox:checked').length;
		
		if (checkbox_checked_length == 0) $(this).parents('.catalog_filter').find('.catalog_filter_clear').hide();
		else $(this).parents('.catalog_filter').find('.catalog_filter_clear').show();
		
		var left = $(this).parents('.catalog_filter').position().left + $(this).parents('.catalog_filter_checkbox').width();
		var top = $(this).parents('.catalog_filter').position().top + $(this).parents('.catalog_filter_checklist').position().top + $(this).parents('.catalog_filter_checkbox').position().top + 21;
		submit_show(left, top);
		});
	
	$('.catalog_filter_radio input').on('change', function(e)
		{
		radio = $(this).parents('.catalog_filter_radiolist').find('.catalog_filter_radio');
		var radio_checked_length = radio.find('input:radio:checked').length;
		
		if (radio_checked_length == 0) $(this).parents('.catalog_filter').find('.catalog_filter_clear').hide();
		else $(this).parents('.catalog_filter').find('.catalog_filter_clear').show();
		
		var left = $(this).parents('.catalog_filter').position().left + $(this).parents('.catalog_filter_checkbox').width();
		var top = $(this).parents('.catalog_filter').position().top + $(this).parents('.catalog_filter_checklist').position().top + $(this).parents('.catalog_filter_checkbox').position().top + 21;
		submit_show(left, top);
		});
	
	$('#catalog_sort_prior').on('change', function(e)
		{
		sorting = $(this).val();
		page = $.getUrlVar('page');
		locating = document.location.pathname + document.location.search;
		search = document.location.search;
		if (search == '') sign = '?'; else sign = '&';
		
		if (page != undefined)
			{
			str_page = 'page=' + page;
			locating = locating.replace('&' + str_page, '');
			locating = locating.replace('?' + str_page, '');
			}
			
		if (strpos({str: locating, find: 'sorting', index: 1})==null)
			{
			locating = locating + sign + "sorting=" + sorting;
			}
		else
			{
			var value = $.getUrlVar('sorting');
			locating = locating.replace("sorting=" + value, "sorting=" + sorting);
			}
			
		document.location = locating;
		});
		
	$('#catalog_sort_type').on('change', function(e)
		{
		type = $(this).val();
		page = $.getUrlVar('page');
		locating = document.location.pathname + document.location.search;
		search = document.location.search;
		if (search == '') sign = '?'; else sign = '&';
		
		if (page != undefined)
			{
			str_page = 'page=' + page;
			locating = locating.replace('&' + str_page, '');
			locating = locating.replace('?' + str_page, '');
			}
			
		if (strpos({str: locating, find: 'type', index: 1})==null)
			{
			locating = locating + sign + "type=" + type;
			}
		else
			{
			var value = $.getUrlVar('type');
			locating = locating.replace("type=" + value, "type=" + type);
			}
			
		document.location = locating;
		});
		
	$('#catalog_filter_clear').on('click', function(e)
		{		
		$('.catalog_filter').find('.catalog_filter_rangelist').each(function(e)
			{
			range_list = $(this);
			slider_range = range_list.find('div[id$=range]');
			min_name = range_list.find('input[name$=min]').attr('name');
			max_name = range_list.find('input[name$=max]').attr('name');
			range_list.off('change', 'input[name='+min_name+']');
			range_list.off('change', 'input[name='+max_name+']');
			var min = slider_range.slider("option", "min");
			var max = slider_range.slider("option", "max");
			slider_range.slider("values", 0, min);
			slider_range.slider("values", 1, max);
			range_list.find('input[name$=min]').val(min);
			range_list.find('input[name$=max]').val(max);
			$('#catalog_bubble_submit').hide();
			range_list.parents('.catalog_filter').find('.catalog_filter_clear').hide();
			});
		$('.catalog_filter').find('.catalog_filter_checklist').each(function(e)
			{
			check_list = $(this);
			check_list.find('.catalog_filter_checkbox').each(function(e)
				{
				$(this).find('input').removeAttr('checked');
				$(this).find('input').removeAttr('disabled');
				});
			check_list.parents('.catalog_filter').find('.catalog_filter_clear').hide();
			});
		$('.catalog_filter').find('.catalog_filter_radiolist').each(function(e)
			{
			radio_list = $(this);
			radio_list.find('.catalog_filter_radio').each(function(e)
				{
				$(this).find('input').removeAttr('checked');
				$(this).find('input').removeAttr('disabled');
				});
			check_list.parents('.catalog_filter').find('.catalog_filter_clear').hide();
			});
			
		url = document.location.pathname;
		sign = "?";
		value = $.getUrlVar('id');
		if (value != undefined)
			{
			url += sign + "id=" + value;
			sign = "&";
			}
		value = $.getUrlVar('type');
		if (value != undefined)
			{
			url += sign + "type=" + value;
			sign = "&";
			}
		value = $.getUrlVar('kind');
		if (value != undefined)
			{
			url += sign + "kind=" + value;
			sign = "&";
			}
		value = $.getUrlVar('sorting');
		if (value != undefined)
			{
			url += sign + "sorting=" + value;
			sign = "&";
			}
		document.location = url;
		});
		
	$('#catalog_filter_submit').on('click', function(e)
		{
		url = document.location.pathname;
		sign = "?";
		value = $.getUrlVar('type');
		if (value != undefined)
			{
			url += sign + "type=" + value;
			sign = "&";
			}
		value = $.getUrlVar('kind');
		if (value != undefined)
			{
			url += sign + "kind=" + value;
			sign = "&";
			}
		value = $.getUrlVar('sorting');
		if (value != undefined)
			{
			url += sign + "sorting=" + value;
			sign = "&";
			}
				
		$('.catalog_filter').find('.catalog_filter_rangelist').each(function(e)
			{
			range_list = $(this);
			slider_range = range_list.find('div[id$=range]');
			param = slider_range.attr('id').replace('-range', '');
			min = slider_range.slider("values", 0);
			max = slider_range.slider("values", 1);
			url += sign + param + "=" + min + ";" + max;
			sign = "&";
			});
						
		$('.catalog_filter').find('.catalog_filter_checklist').each(function(e)
			{
			check_list = $(this);
			var length = check_list.find('.catalog_filter_checkbox input:checkbox:checked').length;
			if (length != 0)
				{
				i = 0;
				id_feature = check_list.attr('data-id');
				if (id_feature == 'cat') param = 'cat';
				else if (id_feature == 'brand') param = 'brand'; 
				else param = 'param' + id_feature;
				url += sign + param + "=";
				check_list.find('.catalog_filter_checkbox input:checkbox:checked').each(function(e)
					{
					if (i > 0) url += ";";
					url += $(this).attr('name').replace('catalog_' + param + '_', '');
					i++;
					});
				}
			});
		$('.catalog_filter').find('.catalog_filter_radiolist').each(function(e)
			{
			radio_list = $(this);
			var length = radio_list.find('.catalog_filter_radio input:radio:checked').length;
			if (length != 0)
				{
				id_feature = radio_list.attr('data-id');
				param = 'param' + id_feature;
				url += sign + param + "=" + radio_list.find('.catalog_filter_radio input:radio:checked').val();
				}
			});
			
		document.location = url;
		});
		
	$('#catalog_bubble_submit').on('click', function(e)
		{
		$('#catalog_filter_submit').trigger('click');
		});
	
	});


$('#catalog_availble').on('change', function(){

    var page = $.getUrlVar('page');
    var locating = document.location.pathname + document.location.search;
    var search = document.location.search;
    var value = $.getUrlVar('nal');
    var sign;

    var nal = $(this).prop('checked') ? $(this).val() : 0;

    if (search == '')
        sign = '?';
    else
        sign = '&';

    if (page != undefined)
    {
        var str_page = 'page=' + page;
        locating = locating.replace('&' + str_page, '');
        locating = locating.replace('?' + str_page, '');
    }

    if(nal){

        if (strpos({str: locating, find: 'nal', index: 1}) == null)
        {
            locating = locating + sign + "nal=" + nal;
        }
        else
        {
            locating = locating.replace("sorting=" + value, "sorting=" + nal);
        }

    }else{
        var str_nal = 'nal=' + value;
        locating = locating.replace('&' + str_nal, '');
        locating = locating.replace('?' + str_nal, '');
    }

    document.location = locating;

});


$('#catalog_discount').on('change', function(){

    var page = $.getUrlVar('page');
    var locating = document.location.pathname + document.location.search;
    var search = document.location.search;
    var value = $.getUrlVar('discount');
    var sign;

    //discount=1
    var param = $(this).prop('checked') ? $(this).val() : 0;

    if (search == '')
        sign = '?';
    else
        sign = '&';

    if (page != undefined)
    {
        var str_page = 'page=' + page;
        locating = locating.replace('&' + str_page, '');
        locating = locating.replace('?' + str_page, '');
    }

    if(param){

        if (strpos({str: locating, find: 'discount', index: 1}) == null)
        {
            locating = locating + sign + "discount=" + param;
        }
        else
        {
            locating = locating.replace("discount=" + value, "discount=" + param);
        }

    }else{
        var str_val = 'discount=' + value;
        locating = locating.replace('&' + str_val, '');
        locating = locating.replace('?' + str_val, '');
    }

    document.location = locating;

});
