function gb_captcha() 
{
    img = document.getElementById('imgcaptcha');
    img.src = '/lib/ajax_captcha/create_image.php?' + Math.random();
}
	
var click_submit_show = 0;
function submit_show(left, top)
{
	arr = new Object();

	/* value = $.getUrlVar('cat');

	if (value != undefined)
		arr['cat'] = value; else arr['cat'] = 0; */

	if ($('.catalog_discount input:checkbox').prop('checked') == true)
	{
		arr['discount'] = 1;
	}
	//qwe
	if ($('.catalog_check_catalog_sort input:checkbox').prop('checked') == true)
	{
		arr['nal'] = 2;
	}
	//qwe

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
			//if (id_feature != 'brand') param = 'param' + id_feature; else param = 'brand';

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
		}
    );
    arr['cur_cat'] = $('[name="cat"]').val();

	arr['table_position'] = $('[name="table_position"]').val();
	arr['cat_filter'] = $('[name="cat_filter"]').val();
	arr['word'] = $('#word_search').val();


	var json_text;
	$.ajax(
		{
		type: "POST",
		url: "/ajax/catalog/numb.php",
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

	if (click_submit_show > 1)
		clearTimeout(submit_bubble_hide);

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
	
$(function(){
	

	/*
	$('.catalog_pos_available').on('click', function(e){
		
		var num = parseInt($('#catalog_tabs .active').attr('id').replace('catalog_tab', ''));
		
		if (num != 4)
		{
			$('#catalog_tabs .active').removeClass('active');
			$('#catalog_info .active').removeClass('active');
			$('#catalog_tab4').addClass('active');
			$('#catalog_info4').addClass('active');
		}
		
		$.scrollTo('#catalog_tabs', 500);
	});*/
	
	

	/* $('.mm_mark').on('click', function() {
		$('#catalog_tab3').addClass('active');
		$('#catalog_tab1').removeClass('active');
		$('#catalog_tab2').removeClass('active');
		$('#catalog_tab4').removeClass('active');

		$('#catalog_info1').removeClass('active');
		$('#catalog_info2').removeClass('active');
		$('#catalog_info3').addClass('active');
		$('#catalog_info4').removeClass('active');
		$.scrollTo('#catalog_tabs', 500);
	}); */
	
	

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
	$("#catalog_option1").chosen({no_results_text: "Результаты не соответствуют", width: "180px"});
	$("#catalog_option2").chosen({no_results_text: "Результаты не соответствуют", width: "115px"});

	$("#check_catalog_sort").chosen({no_results_text: "Результаты не соответствуют", width: "50px"});

	width = 0;
	$("div[id^=catalog_pos_option] > span").each(function(e)
	{
		if ($(this).width() > width) width = $(this).width();
	});
		
	$("div[id^=catalog_pos_option] > span").each(function(e)
	{
		$(this).width(width);
	});
		
	$("div[id^=catalog_pos_option] select").on("change", function(e)
		{

		var id_value = parseInt($(this).val());
		var length = $("div[id^=catalog_pos_option] select").length;
		var option = $(this).parents('div[id^=catalog_pos_option]').attr('id').replace('catalog_pos_option', '');

		if ((length == 2)&&(option == 1))
			{
			id = $.getUrlVar('id');

			$.ajax(
				{
				url: "/ajax/catalog/option2.php",
				type: "GET",
				data: { "id": id, "option1": id_value },
				cache: false,
				async: false,
				success: function(response)
					{
					$('#catalog_option2').empty();
					$('#catalog_option2').append(response);
					$('#catalog_option2').chosen({no_results_text: "Результаты не соответствуют"});
					$('#catalog_option2').trigger("chosen:updated");

					option2 = $('#catalog_option2 :selected').val();
					$.ajax(
						{
						url: "/ajax/catalog/change.php",
						type: "GET",
						data: { "id": id, "option1": id_value, "option2": option2 },
						cache: false,
						async: false,
						success: function(response)
							{
							$('#catalog_temp').empty();
							$('#catalog_temp').append(response);
							}
						});
					}
				});
			}

		if (((length == 1)&&(option == 1))||((length == 2)&&(option == 2)))
			{
			id = $.getUrlVar('id');
			if (length == 1)
				{
				option1 = id_value;
				option2 = 0;
				}
			if (length == 2)
				{
				option1 = $('#catalog_option1').val();
				option2 = id_value;
				}
                var new_id = $('.detail-rt').attr('data-id');
			$.ajax(
				{
				url: "/ajax/catalog/change.php",
				type: "GET",
				data: { "id": new_id, "option1": option1, "option2": option2 },
				cache: false,
				async: false,
				success: function(response)
					{
					$('#catalog_temp').empty();
					$('#catalog_temp').append(response);
					}
				});
			}

		});
		
		
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
	
	$('.catalog_filter_radio input').on('change', function(e){
		
		radio = $(this).parents('.catalog_filter_radiolist').find('.catalog_filter_radio');
		var radio_checked_length = radio.find('input:radio:checked').length;
		
		if (radio_checked_length == 0) $(this).parents('.catalog_filter').find('.catalog_filter_clear').hide();
		else $(this).parents('.catalog_filter').find('.catalog_filter_clear').show();
		
		var left = $(this).parents('.catalog_filter').position().left + $(this).parents('.catalog_filter_checkbox').width();
		var top = $(this).parents('.catalog_filter').position().top + $(this).parents('.catalog_filter_checklist').position().top + $(this).parents('.catalog_filter_checkbox').position().top + 21;
		submit_show(left, top);
		
	});
	
	$('.catalog_discount input').on('change', function(e){		
		var left = $(this).parents('.catalog_discount').position().left + $(this).parents('.catalog_discount').width();
		var top = $(this).parents('.catalog_discount').position().top - 15;
		submit_show(left, top);
	});
		//qwe
		
		
	$('.catalog_check_catalog_sort input').on('change', function(e){
		
		var left = $(this).parents('.catalog_check_catalog_sort').position().left + $(this).parents('.catalog_check_catalog_sort').width();
		var top = $(this).parents('.catalog_check_catalog_sort').position().top - 15;
		submit_show(left, top);
		
	});
		//qwe
		
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
			
		if (strpos({str: locating, find: 'sorting', index: 1}) == null)
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

	/*
	function delUrlPrm(Url,Prm) {
		var a=Url.split('?');
		var re = new RegExp('(\\?|&)'+Prm+'=[^&]+','g');
		Url=('?'+a[1]).replace(re,'');
		Url=Url.replace(/^&|\?/,'');
		var dlm=(Url=='')? '': '?';
		return a[0]+dlm+Url;
	}*/


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

		$('#check_catalog_sort').on('change', function(e)
		{
			nal = $(this).val();
			console.log(nal);
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

			if (strpos({str: locating, find: 'nal', index: 1})==null)
			{
				locating = locating + sign + "nal=" + nal;
			}
			else
			{
				var value = $.getUrlVar('nal');
				locating = locating.replace("nal=" + value, "nal=" + nal);
			}

			document.location = locating;
		});
		
		
	$('#catalog_filter_clear').on('click', function(e)
		{
            url = document.location.pathname;
			console.log(document.location);
            if(url.indexOf("catalog/") >= 0){
                url = url.split('/');
                url = '/' + url[1] + '/' + url[2] + '/';
            }
            if(url.indexOf("sale/") >= 0){
                url = url.split('/');
                url = '/' + url[1] + '/';
            }
            if(url.indexOf("search/") >= 0){
                url = url.split('/');
                url = '/' + url[1] + '/' + document.location.search;
            }
			document.location = url;
		});

    $('#catalog_filter_submit').on('click', function(e)
		{
		url = document.location.pathname;

		if (url.charAt(url.length - 1) != '/' ) {
            url += '/';
		}

		url = url.split('filter/')[0];
		sign = "?";


		if(url.indexOf("filter/") < 0){
            url += "filter/";
        }


		if($('input[name="catalog_page"]').length > 0){
			
			value = $.getUrlVar('cat');
		
			if (value != undefined)
			{
				url += "cat-" + value + '/';
			}
		}	
		
		value = $.getUrlVar('type');
		if (value != undefined)
			{
			url += "type-" + value + '/';
			}
		value = $.getUrlVar('kind');
		if (value != undefined)
			{
			url += "kind-" + value + '/';
			}
		value = $.getUrlVar('sorting');
		if (value != undefined)
			{
			url += "sorting-" + value + '/';
			}


		value = $.getUrlVar('discount');

		if (value != undefined)
		{
			url += "discount-" + value + '/';
		}

		value = $.getUrlVar('nal');

		if (value != undefined)
		{
			url += "nal-" + value + '/';
		}


		/*

		if ($('.catalog-panel-view .catalog-availble input:checkbox').prop('checked') == true)
			{
				discount = 1;
				url += sign + "discount=" + discount;
				sign = "&";
			}
			//qwe
		if ($('.catalog-panel-view .catalog-discount input:checkbox').prop('checked') == true)
			{
				nal = 2;
				url += sign + "nal=" + nal;
				sign = "&";
			}

			//qwe
		*/

		$('.catalog_filter').find('.catalog_filter_rangelist').each(function(e)
			{
			range_list = $(this);
			slider_range = range_list.find('div[id$=range]');
			param = slider_range.attr('id').replace('-range', '');
			min = slider_range.slider("values", 0);
			max = slider_range.slider("values", 1);
			url += "price-" + min + ";" + max + "/";
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
				//if (id_feature != 'brand') param = 'param' + id_feature; else param = 'brand';

				if (id_feature == 'cat') {
					param = 'cat-';
                    url += param;
				}
				else if (id_feature == 'brand'){
                    param = 'brand-';
                    url += param;
				}
				else {
					param = 'param' + id_feature;
                    url += param + ";";
				}



				check_list.find('.catalog_filter_checkbox input:checkbox:checked').each(function(e)
					{
					if (i > 0) url += ";";
                        if (id_feature == 'brand'){
                            url += $(this).attr('name').replace('catalog_brand_', '');
                        }
                        else if (id_feature == 'cat'){
                            url += $(this).attr('name').replace('catalog_cat_', '');
                        }
                        else{
                            url += $(this).attr('name').replace('catalog_' + param + '_', '');
                        }
					i++;
					});
				url += "/";
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
				url +=  param  + "-" +  radio_list.find('.catalog_filter_radio input:radio:checked').val() + "/";
				}
			});

            if($('input[name="word"]').length > 0) {
                value = $.getUrlVar('word');
                if (value != undefined) {
                    url += "?word=" + value;
                }
            }

		document.location = url;
		});
		
	$('#catalog_bubble_submit').on('click', function(e)
		{
		$('#catalog_filter_submit').trigger('click');
		});
		
	$('#gb_show_comments').on('click', function(e)
		{
		$(this).hide();
		max_message = parseInt($('input[name=max_message]').val());
		id = $.getUrlVar('id');
		$.ajax(
			{
			url: "/ajax/catalog/show_message.php",
			type: "GET",
			data: { "id": id, "max_message": max_message },
			cache: false,
			async: false,
			success: function(response)
				{
				$('#gb_opinions').append(response);
				}
			});
		});
		
	$("#gb_add_markbox").on("click", 'div[id^=mark]', function(e)
    {
        left =  parseInt(e.offsetX);
        id = $(this).attr("id");
        mark = parseInt(id.replace("mark","")) + 2;
        if (left < 11) mark = mark - 1;
        $('input[name=gb_mark]').val(mark);

        $("div[id^=mark]").each(function()
        {
            id = $(this).attr("id");
            num = parseInt(id.replace("mark",""));
            if (num+3/2 <= mark) $(this).attr('class', 'gb_add_mark_1');
            else if (num+1/2 <= mark) $(this).attr('class', 'gb_add_mark_05');
            else $(this).attr('class', 'gb_add_mark_0');
        });
    });

	$("#gb_rating").on("click", '.stars li', function(e)
	{
		var container = $("#gb_rating");

		var left =  parseInt(e.offsetX);
		var id = $(this).attr("id");
		var mark = parseInt(id.replace("mark","")) + 2;
		if (left < 11) mark = mark - 1;
        container.find('input[name=gb_mark]').val(mark);

        container.find(".stars li").each(function()
		{
			var id = $(this).attr("id");
			var num = parseInt(id.replace("mark",""));
			if (num+3/2 <= mark) $(this).attr('class', 'icon-site icon-star-full');
			else if (num+1/2 <= mark) $(this).attr('class', 'icon-site icon-star-half');
			else $(this).attr('class', 'icon-site icon-star-empty');
		});
	});
		
	$('#review-form').on('submit', function(e)
		{

		/*
		var code = $('input[name=gb_code]').val();
		
		$("#gb_add_temp").empty();
		$.ajax(
			{
			url: "/lib/ajax_captcha/captcha.php",
			type: "GET",
			data: { "code": code },
			cache: false,	
			async: false,
			success: function(response)
				{
				$("#gb_add_temp").append(response);
				}
			});
		status_captcha = parseInt($("#gb_add_temp").html());



		if (status_captcha == 0)
			{
			alert('Введите правильный текст с картинки');
			gb_captcha();
			}
		else
			{

			$("#gb_add_temp").empty();
			name = $('input[name=gb_name]').val();
			email = $('input[name=gb_email]').val();
			mark = $('input[name=gb_mark]').val();
			message = $('textarea[name=gb_message]').val();
			var location = document.location.href;
			id = $.getUrlVar('id');
			$.ajax(
				{
				url: "/ajax/catalog/gb.php",
				type: "GET",
				data: { "name": name, "email": email, "mark": mark, "message": message, "location": location, "id": id },
				cache: false,	
				async: false,
				success: function(response)
					{
					$("#gb_add_temp").append(response);
					}
				});
			}

			*/

			e.preventDefault();

			$("#gb_add_temp").empty();
			var form = $(this);

			/*var name = form.find('input[name=gb_name]').val();
			var email = form.find('input[name=gb_email]').val();
			var mark = form.find('input[name=gb_mark]').val();
			var message = form.find('textarea[name=gb_message]').val();
			var plus = form.find('textarea[name=gb_plus]').val();
			var minus = form.find('textarea[name=gb_minus]').val();
			var recommend = form.find('input[name=gb_recommend]:checked').val();*/

            var data = form.serializeArray();


            var location = document.location.href;
            var id = $.getUrlVar('id');

            data.push(
            	{
					"name": "location",
					"value": location
            	}
            );

            data.push(
                {
                    "name": "id",
                    "value": id
                }

            );


			$.ajax(
			{
				url: "/ajax/catalog/gb.php",
				type: "GET",
				//data: { "name": name, "email": email, "mark": mark, "message": message, "location": location, "id": id },
				data: data,
				cache: false,
				async: false,
				success: function(response)
				{
					$("#gb_add_temp").append(response);
				}
			});


		});
	
	$('#cat_text').each(function()
		{
		var text_box = $(this);
		var max_height = text_box.find('#cat_text_info').css('max-height').replace('px', '');
		var height = text_box.find('#cat_text_box').height();
		var h = 0;
		var length = text_box.find('#cat_text_box > p, #cat_text_box > h1, #cat_text_box > h2').length;
		var i = 0, j = 0;
		text_box.find('#cat_text_box > p, #cat_text_box > h1, #cat_text_box > h2').each(function(e)
			{
			i++;
			h += $(this).height();
			if ($(this).is('h1,h2') == false) if ((i == 1)||(i == length)) dh = 20; 
			else dh = 10;
			else if (i == 1) dh = 10; else dh = 0;
			h += dh;
			if (max_height <= h) return false;
			});
		if (max_height <= h) text_box.find('#cat_text_info').css('max-height', h+'px');
		if (height > max_height)
			{
			text_box.find('#cat_text_show').show();
			}
		});
		
	$('#cat_text').on('click', '#cat_text_show', function(e)
		{
		var text_box = $(this);
		text_box.hide();
		var max_height = text_box.parents('#cat_text').find('#cat_text_info').css('max-height').replace('px', '');
		var height = text_box.parents('#cat_text').find('#cat_text_box').height();
		text_box.parents('#cat_text').find('#cat_text_info').css('height', max_height+'px');
		text_box.parents('#cat_text').find('#cat_text_info').css('max-height', 'none');
		text_box.parents('#cat_text').find('#cat_text_info').data('max-height', max_height);
		text_box.parents('#cat_text').find('#cat_text_info').animate({height: height+'px'}, 300);
		setTimeout(function()
			{
			text_box.parents('#cat_text').find('#cat_text_hide').show();
			}, 300);
		});
		
	$('#cat_text').on('click', '#cat_text_hide', function(e)
		{
		var text_box = $(this);
		text_box.hide();
		var max_height = text_box.parents('#cat_text').find('#cat_text_info').data('max-height');
		text_box.parents('#cat_text').find('#cat_text_info').animate({height: max_height+'px'}, 300);
		setTimeout(function()
			{
			text_box.parents('#cat_text').find('#cat_text_info').css('max-height', max_height+'px');
			text_box.parents('#cat_text').find('#cat_text_show').show();
			}, 300);
		});
		
	});