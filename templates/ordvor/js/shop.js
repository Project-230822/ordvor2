function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

function updateSmallBasket(obj){
    var sum = parseInt(obj.sum);
    var quantity =  parseInt(obj.quantity);
    var sum_word = number_format(sum, 0, '.', ' ');
    sum_word += " руб.";

    $('.js-basket-small').each(function () {
        $(this).find('.js-basket-sum').html(sum_word);
        $(this).find('.js-basket-quantity').html(quantity);
    });
}



function updateTimer() {
	var current_date = new Date();
	var dateToTarget = dateToTarget - current_date

	console.log(current_date);
}

function shop_add(id_position, code, numb)
	{	
	arr = new Object();
	arr['id_position'] = id_position;
	arr['code'] = code;
	arr['numb'] = numb;

	$.ajax(
		{
			type: "POST",
			url: "/ajax/recycle/recycle.php",
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
	
	var obj = new Object();
	obj = JSON.parse(json_text);

	var status = obj.status;
	
	switch (status) 
		{
		case 1:
		document.location = '/';
		break;
		
		case 2:
			var sum = parseInt(obj.sum);
			var quantity =  parseInt(obj.quantity);
			var sum_word = number_format(sum, 0, '.', ' ');
			sum_word += " руб.";

            updateSmallBasket(obj);

			/*
            $('.js-basket-small').each(function () {
				$(this).find('.js-basket-sum').html(sum_word);
                $(this).find('.js-basket-quantity').html(quantity);
            });*/

			//shopadd_show();

            //js-basket-popup-res

            var basketPopup = $('.js-basket-popup').first();
            var resultText = 'В вашей корзине '+ quantity + ' ' + declOfNum(quantity, ['товар', 'товара', 'товаров']) + ' на сумму ' + sum;

            basketPopup.find('.js-basket-popup-res').html(resultText);

            console.log(basketPopup);

            $.magnificPopup.open({
                items: {
                    src: basketPopup,
                    type: 'inline'
                }
            });


		break;
		
		case 3:
			alert('Вы заказали больше имеющегося количества');
		break;
		
		default:
		}	
	}
	
function recycle_update(id_position, code, numb)
	{
		console.log(numb);
	arr = new Object();
	arr['id_position'] = id_position;
	arr['code'] = code;
	arr['numb'] = numb;
	arr['delivery_method'] = $('input[name=delivery_method]:checked').val();
	
	$.ajax(
		{
		type: "POST",
		url: "/ajax/recycle/recycle_update.php",
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
		
	var obj = new Object();
	obj = JSON.parse(json_text);
	var status = obj.status;
	
	switch (status) 
		{
		case 1:
		document.location = '/';
		break;
		
		case 2:
		/*sum_position = parseInt(obj.sum_position);
		sum_position_word = number_format(sum_position, 0, '.', ' ');
		sum_position_word += " руб.";
		sum_old = parseInt(obj.sum_old);
		sum_old_word = number_format(sum_old, 0, '.', ' ');
		sum_old_word += " руб.";
							
		if (sum_old == 0)
			{
			$('.order_table[data-id='+id_position+'_'+code+'] .order_table_price span').html(sum_position_word);
			}
		else
			{
			$('.order_table[data-id='+id_position+'_'+code+'] .order_table_price span').html(sum_old_word);
			$('.order_table[data-id='+id_position+'_'+code+'] .order_table_discountprice span').html(sum_position_word);
			}*/

		$('.order-cart .basket-item').each(function(e)
			{
			var table = $(this);
			var array = table.data('id').split('_');
			var id_position = array[0];
			var code = array[1];
			$.ajax(
				{
				url: "/ajax/recycle/position_update.php",
				type: "GET",
				data: { "id_position": id_position, "code": code },
				cache: false,
				async: false,
				success: function(response)
					{
						console.log(response);
						table.find('.price-wrap').empty().append(response);
					}
				});
			});
			

		// var sum = parseInt(obj.sum);
		// var quantity =  parseInt(obj.quantity);

		var sum_word = obj.sum_full;
		var delivery_word = obj.delivery_word;
		var sum_all_word = obj.sum_all_word;
		var discount = obj.discount;


		updateSmallBasket(obj);

		var sumEl = $('#basket-sum-full').find('.js-val');
		var deliveryEl =  $('#basket-delivery-full').find('.js-val');
		var discountEl =  $('#basket-sum-discount').find('.js-val');
		var sumResEl =  $('#basket-sum-result').find('.js-val');

		if(sumEl.length){
			sumEl.html(sum_word);
		}

		if(deliveryEl.length){
			deliveryEl.html(delivery_word);
		}

		if(discountEl.length){
			discountEl.html(discount);
		}

		if(sumResEl.length){
			sumResEl.html(sum_all_word);
		}
		

		/*
		$('#main_recycle_sum').html(sum_word);
		$('#fixed_recycle_sum').html(sum_word);
		
		$('#delivery_sum span').html(sum_word);
		$('#delivery_sum_delivery span').html(delivery_word);
		$('#delivery_sum_all span').html(sum_all_word);*/


		break;
			
		default:
		}	
	}
	
function recycle_delete(id_position, code)
	{
	var arr = new Object();
	arr['id_position'] = id_position;
	arr['code'] = code;
	var deliveryField = $('input[name=delivery_method]:checked');

    arr['delivery_method'] = 0;

    if(deliveryField.length > 0){
        arr['delivery_method'] = deliveryField.val();
	}

		
	$.ajax(
		{
		type: "POST",
		url: "/ajax/recycle/recycle_delete.php",
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
		
	var obj = new Object();
	obj = JSON.parse(json_text);
	var status = obj.status;
	
	switch (status) 
		{
		case 1:
		document.location = '/';
		break;
		
		case 2:
		$('.order-cart .basket-item[data-id='+id_position+'_'+code+']').remove();

		$('.order-cart .basket-item').each(function(e)
			{
			var table = $(this);
			var array = table.data('id').split('_');
			var id_position = array[0];
			var code = array[1];
			$.ajax(
				{
				url: "/ajax/recycle/position_update.php",
				type: "GET",
				data: { "id_position": id_position, "code": code },
				cache: false,
				async: false,
				success: function(response)
					{
					table.find('.order_table_pricebox').empty().append(response);
					}
				});
			});
			
		var sum_word = obj.sum_word;
		var delivery_word = obj.delivery_word;
		var sum_all_word = obj.sum_all_word;
		var discount = obj.discount;

		//$('#main_recycle_sum').html(sum_word);
		//$('#fixed_recycle_sum').html(sum_word);

	   // obj.sum
	   // obj.quantity
       updateSmallBasket(obj);

		var sumEl = $('#basket-sum-full').find('.js-val');
		var deliveryEl =  $('#basket-delivery-full').find('.js-val');
		var discountEl =  $('#basket-sum-discount').find('.js-val');
		var sumResEl =  $('#basket-sum-result').find('.js-val');

		if(sumEl.length){
            sumEl.html(sum_word);
		}

		if(deliveryEl.length){
            deliveryEl.html(delivery_word);
        }

		if(discountEl.length){
			discountEl.html(discount);
		}

		if(sumResEl.length){
            sumResEl.html(sum_all_word);
		}

		//$('#delivery_sum_delivery span').html(delivery_word);

		//if ($('.order_table').length == 0) document.location = '/';

			if(obj.quantity < 1){
                document.location = '/';
			}

		break;
		
		default:
		}	
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



function compare_positions(id_position, code) {
    arr = new Object();
    arr['id_position'] = id_position;
    arr['code'] = code;

    $.ajax(
        {
            type: "POST",
            url: "/ajax/recycle/compare.php",
            dataType: "json",
            data: JSON.stringify(arr),
            contentType: "application/json; charset=utf-8",
            traditional: true,
            cache: false,
            //async: false,
            success: function (response, textStatus, jqXHR) {
                json_text = jqXHR.responseText;

                var obj = new Object();
                obj = JSON.parse(json_text);
                var status = obj.status;

                //console.log(obj);

                switch (status) {

                	case 1:
                        if ($.cookie('compare') == null) {
                            var date = new Date();
                            date.setTime(date.getTime() + (60 * 60 * 1000));
                            $.cookie("compare", "1", {expires: date, path: '/'});
                           // newWindow('/compare/');
                        }

                        $('#js-compare-counter').html(obj.count);
                        break;

                    case 2:
                        break;

                    default:
                }
            }


        });

}
	
$(function()
	{
	
	$('.js-add-basket-d').on("click", function(e)
    {
        e.preventDefault();

        var id_position = $(this).attr('data-id'),
            code = $(this).attr('data-uid'),
            inputQuantity,
            position = $(this).closest('.js-product-item-d'),
            numb = 1;

        inputQuantity = $('input[name="numb"]');
        if(inputQuantity.length > 0)
            numb = parseInt(inputQuantity.val());

        if (code == undefined) code = 0;

        shop_add(id_position, code, numb);
    });
		
	$('body').on("click", '.js-product-item .js-add-basket', function(e)
		{
			e.preventDefault();


			var code,
				id_position,
				inputQuantity,
				position = $(this).parents('.js-product-item'),
				arr = position.data('id').split('_'),
				numb = 1;

			if (arr[1] != undefined){
                code = arr[1];
			}
			else{
                code = 0;
			}
			id_position = arr[0];

            inputQuantity = position.find('input[name="numb"]');

            if(inputQuantity.length > 0)
				numb = parseInt(inputQuantity.val());
			console.log(id_position);

			shop_add(id_position, code, numb);
		});
		
	$('.catalog_position').on("click", '.catalog_position_buy2', function(e)
		{
		position = $(this).parents('.catalog_position');
		arr = position.data('id').split('_');
		var numb = 1;
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		var id_position = arr[0];
		url_add = id_position;
		if (code != 0) url_add += '&code=' + code;
		var location = '/catalog/?id=' + url_add;
		var date = new Date();
		date.setTime(date.getTime() + (60 * 60 * 1000));
		$.cookie("position"+id_position+"_"+code, numb, { expires: date, path: '/' });
		document.location = location;
		});
		
	$('.js-product-item').on("click", '.catalog-position-miss', function(e)
		{
		var position = $(this).parents('.js-product-item');
		var arr = position.data('id').split('_');
		var numb = 1;
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		var id_position = arr[0];
		var url_add = id_position;
		if (code != 0) url_add += '&code=' + code;
		var location = '/catalog/?id=' + url_add;
		var date = new Date();
		date.setTime(date.getTime() + (60 * 60 * 1000));
		$.cookie("position"+id_position+"_"+code, numb, { expires: date, path: '/' });
		document.location = location;
		});
	
	$('.catalog_table').on("click", '.catalog_table_buy', function(e)
		{
		position = $(this).parents('.catalog_table');
		arr = position.data('id').split('_');
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		var id_position = arr[0];
		var numb = parseInt(position.find('.catalog_table_numb_input input').val());
		shop_add(id_position, code, numb);
		});
		
	$('.catalog_table').on("click", '.catalog_table_buy2', function(e)
		{
		position = $(this).parents('.catalog_table');
		arr = position.data('id').split('_');
		var numb = 1;
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		var id_position = arr[0];
		url_add = id_position;
		if (code != 0) url_add += '&code=' + code;
		var location = '/catalog/?id=' + url_add;
		var date = new Date();
		date.setTime(date.getTime() + (60 * 60 * 1000));
		$.cookie("position"+id_position+"_"+code, numb, { expires: date, path: '/' });
		document.location = location;
		});
		
	$('.catalog_table').on("click", '.catalog_table_miss', function(e)
		{
		position = $(this).parents('.catalog_table');
		arr = position.data('id').split('_');
		var numb = 1;
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		var id_position = arr[0];
		url_add = id_position;
		if (code != 0) url_add += '&code=' + code;
		var location = '/catalog/?id=' + url_add;
		var date = new Date();
		date.setTime(date.getTime() + (60 * 60 * 1000));
		$.cookie("position"+id_position+"_"+code, numb, { expires: date, path: '/' });
		document.location = location;
		});
	
	$('.related_list').on("click", '.related_buy', function(e)
		{
		position = $(this).parents('.related_list');
		arr = position.data('id').split('_');
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		var id_position = arr[0];
		var numb = parseInt(position.find('.related_numb_input input').val());
		shop_add(id_position, code, numb);
		});
		
	$('.related_list').on("click", '.related_buy2', function(e)
		{
		position = $(this).parents('.related_list');
		arr = position.data('id').split('_');
		var numb = position.find('.related_numb_input input').val();
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		var id_position = arr[0];
		url_add = id_position;
		if (code != 0) url_add += '&code=' + code;
		var location = '/catalog/?id=' + url_add;
		var date = new Date();
		date.setTime(date.getTime() + (60 * 60 * 1000));
		$.cookie("position"+id_position+"_"+code, numb, { expires: date, path: '/' });
		document.location = location;
		});
		
	$('.recommended_list').on("click", '.recommended_buy', function(e)
		{
		position = $(this).parents('.recommended_list');
		arr = position.data('id').split('_');
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		var id_position = arr[0];
		var numb = parseInt(position.find('.recommended_numb_input input').val());
		shop_add(id_position, code, numb);
		});
			
	$('.recommended_list').on("click", '.recommended_buy2', function(e)
		{
		position = $(this).parents('.recommended_list');
		arr = position.data('id').split('_');
		var numb = position.find('.recommended_numb_input input').val();
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		var id_position = arr[0];
		url_add = id_position;
		if (code != 0) url_add += '&code=' + code;
		var location = '/catalog/?id=' + url_add;
		var date = new Date();
		date.setTime(date.getTime() + (60 * 60 * 1000));
		$.cookie("position"+id_position+"_"+code, numb, { expires: date, path: '/' });
		document.location = location;
		});
	
	$('.compare_block').on("click", '.compare_position_buy', function(e)
		{
		position = $(this).parents('.compare_block');
		arr = position.data('id').split('_');
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		var id_position = arr[0];
		var numb = parseInt(position.find('.compare_position_numb_input input').val());
		shop_add(id_position, code, numb);
		});
		
	$('.compare_block').on("click", '.compare_position_buy2', function(e)
		{
		position = $(this).parents('.compare_block');
		arr = position.data('id').split('_');
		var numb = position.find('.compare_position_numb_input input').val();
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		var id_position = arr[0];
		url_add = id_position;
		if (code != 0) url_add += '&code=' + code;
		var location = '/catalog/?id=' + url_add;
		var date = new Date();
		date.setTime(date.getTime() + (60 * 60 * 1000));
		$.cookie("position"+id_position+"_"+code, numb, { expires: date, path: '/' });
		document.location = location;
		});
		
	$('.compare_block').on("click", '.compare_position_miss', function(e)
		{
		position = $(this).parents('.compare_block');
		arr = position.data('id').split('_');
		var numb = position.find('.compare_position_numb_input input').val();
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		var id_position = arr[0];
		url_add = id_position;
		if (code != 0) url_add += '&code=' + code;
		var location = '/catalog/?id=' + url_add;
		var date = new Date();
		date.setTime(date.getTime() + (60 * 60 * 1000));
		$.cookie("position"+id_position+"_"+code, numb, { expires: date, path: '/' });
		document.location = location;
		});
		
	$('.order-cart').on('click', '.basket-item-delete', function(e)
	{
		var arr = $(this).parents('.basket-item').data('id').split('_');
		var id_position = arr[0];
		var code = arr[1];
		recycle_delete(id_position, code);
	});
		
	
	$('.order_table').on('click', '.order_table_numb_count', function(e)
	{
		position = $(this).parents('.order_table');
		arr = position.data('id').split('_');
		var id_position = arr[0];
		var code = arr[1];
		var numb = parseInt(position.find('.order_table_numb_input input').val());
		recycle_update(id_position, code, numb);
	});


	$('.order-cart .basket-item').on('change', 'input[name="numb"]', function(e)
		{
			var  position = $(this).closest('.basket-item');
			var  arr = position.data('id').split('_');
			var id_position = arr[0];
			var code = arr[1];
			var numb = parseInt($(this).val());
			recycle_update(id_position, code, numb);
		}
	);

		/*
        $('.order-cart .basket-item').on('click', '.spinner-decrease, .spinner-increase',function(){
            var position = $(this).closest('.basket-item');
            position.find('input[name="numb"]').change();
		});
		*/

       // spinner-decrease
       // spinner-increase


		
	$('.catalog_table').on('click', '.catalog_table_numb_decrease', function(e)
		{
		input_form = $(this).parents('.catalog_table').find('.catalog_table_numb_input input');
		num = parseInt(input_form.val());
		if (num != 1) 
			{
			num -= 1;
			input_form.val(num);
			}	
		});
	
	$('.catalog_table').on('click', '.catalog_table_numb_increase', function(e)
		{
		input_form = $(this).parents('.catalog_table').find('.catalog_table_numb_input input');
		num = parseInt(input_form.val());
		num += 1;
		input_form.val(num);
		});
	
	$('.catalog_table').on('change', '.catalog_table_numb_input input', function(e)
		{
		num = parseInt($(this).val());
		if ((isNaN(num) == true)||(num <= 0)) num = 1;
		$(this).val(num);
		});
		
	$('.js-product-item').on('click', '.catalog_position_numb_decrease', function(e)
		{
		input_form = $(this).parents('.js-product-item').find('.catalog_position_numb_input input');
		num = parseInt(input_form.val());
		if (num != 1) 
			{
			num -= 1;
			input_form.val(num);
			}	
		});
	
	$('.js-product-item').on('click', '.catalog_position_numb_increase', function(e)
		{
		input_form = $(this).parents('.js-product-item').find('.catalog_position_numb_input input');
		num = parseInt(input_form.val());
		num += 1;
		input_form.val(num);
		});
	
	$('.js-product-item').on('change', '.catalog_position_numb_input input', function(e)
		{
		num = parseInt($(this).val());
		if ((isNaN(num) == true)||(num <= 0)) num = 1;
		$(this).val(num);
		});
		
	$('.recommended_list').on('click', '.recommended_numb_decrease', function(e)
		{
		input_form = $(this).parents('.recommended_list').find('.recommended_numb_input input');
		num = parseInt(input_form.val());
		if (num != 1) 
			{
			num -= 1;
			input_form.val(num);
			}	
		});
	
	$('.recommended_list').on('click', '.recommended_numb_increase', function(e)
		{
		input_form = $(this).parents('.recommended_list').find('.recommended_numb_input input');
		num = parseInt(input_form.val());
		num += 1;
		input_form.val(num);
		});
	
	$('.recommended_list').on('change', '.recommended_numb_input input', function(e)
		{
		num = parseInt($(this).val());
		if ((isNaN(num) == true)||(num <= 0)) num = 1;
		$(this).val(num);
		});
		
	$('.related_list').on('click', '.related_numb_decrease', function(e)
		{
		input_form = $(this).parents('.related_list').find('.related_numb_input input');
		num = parseInt(input_form.val());
		if (num != 1) 
			{
			num -= 1;
			input_form.val(num);
			}	
		});
	
	$('.related_list').on('click', '.related_numb_increase', function(e)
		{
		input_form = $(this).parents('.related_list').find('.related_numb_input input');
		num = parseInt(input_form.val());
		num += 1;
		input_form.val(num);
		});
	
	$('.related_list').on('change', '.related_numb_input input', function(e)
		{
		num = parseInt($(this).val());
		if ((isNaN(num) == true)||(num <= 0)) num = 1;
		$(this).val(num);
		});
	
	$('.js-product-item-d').on('click', '.catalog_position_numb_decrease', function(e)
		{
		input_form = $(this).parents('.js-product-item-d').find('.catalog_position_numb_input input');
		num = parseInt(input_form.val());
		if (num != 1) 
			{
			num -= 1;
			input_form.val(num);
			}	
		});
	
	$('.js-product-item-d').on('click', '.catalog_position_numb_increase', function(e)
		{
		input_form = $(this).parents('.js-product-item-d').find('.catalog_position_numb_input input');
		num = parseInt(input_form.val());
		num += 1;
		input_form.val(num);
		});
	
	$('.js-product-item-d').on('change', '.catalog_position_numb_form input', function(e)
		{
		num = parseInt($(this).val());
		if ((isNaN(num) == true)||(num <= 0)) num = 1;
		$(this).val(num);
		});	
	
	$('.compare_block').on('click', '.compare_position_numb_decrease', function(e)
		{
		input_form = $(this).parents('.compare_position_numb').find('.compare_position_numb_input input');
		num = parseInt(input_form.val());
		if (num != 1) 
			{
			num -= 1;
			input_form.val(num);
			}	
		});
	
	$('.compare_block').on('click', '.compare_position_numb_increase', function(e)
		{
		input_form = $(this).parents('.compare_position_numb').find('.compare_position_numb_input input');
		num = parseInt(input_form.val());
		num += 1;
		input_form.val(num);
		});
	
	$('.compare_block').on('change', '.compare_position_numb_input input', function(e)
		{
		num = parseInt($(this).val());
		if ((isNaN(num) == true)||(num <= 0)) num = 1;
		$(this).val(num);
		});
		
	$('.basket-items-list').on('click', '.spinner-decrease', function(e)
		{
		var position = $(this).parents('.basket-item');
		var input_form = position.find('input[name="numb"]');
		var num = parseInt(input_form.val());
		if (num != 1) 
			{
			num -= 1;
			input_form.val(num);
                input_form.change();
			}	
		});
	
	$('.basket-items-list').on('click', '.spinner-increase', function(e)
		{
		var position = $(this).parents('.basket-item');
		var array = position.data('id').split('_');
		var input_form = position.find('input[name="numb"]');
		var num = parseInt(input_form.val());
		num += 1;
		
		arr = new Object();
		arr['id_position'] = array[0];
		arr['code'] = array[1];
		arr['num'] = num;
		
		$.ajax(
			{
			type: "POST",
			url: "/ajax/recycle/increase.php",
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
		
		var obj = new Object();
		obj = JSON.parse(json_text);
		var status = obj.status;
		
		switch (status) 
			{
			case 1:
			break;
			
			case 2:
			num = obj.num;
			break;
					
			default:
			}	
		
		input_form.val(num);
            input_form.change();
		});
	
	$('.basket-items-list').on('change', 'input[name="numb"]', function(e)
		{
		var position = $(this).parents('.basket-item');
		var array = position.data('id').split('_');
		
		var num = parseInt($(this).val());
		if ((isNaN(num) == true)||(num <= 0)) num = 1;
		
		var arr = new Object();
		arr['id_position'] = array[0];
		arr['code'] = array[1];
		arr['num'] = num;
		
		$.ajax(
			{
			type: "POST",
			url: "/ajax/recycle/increase.php",
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
		
		var obj = new Object();
		obj = JSON.parse(json_text);
		var status = obj.status;
		
		switch (status) 
			{
			case 1:
			break;
			
			case 2:
			num = obj.num;
			break;
					
			default:
			}
			
		$(this).val(num);
		});
		
		
	$('body').delegate('.js-compare', 'click',  function(e)
	{
		if($(this).find('span').hasClass('compare_true')){

		}else{
            jQuery(this).find('span').addClass('compare_true');
            arr = $(this).closest('.js-product-item').data('id').split('_');
            var id_position = arr[0];
            var code;
            if (arr[1] != undefined) code = arr[1]; else code = 0;

            $.magnificPopup.open({
                items: {
                    src: $('.js-compare-popup'),
                    type: 'inline'
                }
            });

            compare_positions(id_position, code);
		}

	});


	$('.js-product-item-d').on('click', '.js-compare-d', function(e)
	{
		//alert();
        var id_position = $('.js-compare-d').attr("data-id"),
            code = $('.js-compare-d').attr("data-code");
        if (code == undefined) code = 0;

        $.magnificPopup.open({
            items: {
                src: $('.js-compare-popup'),
                type: 'inline'
            }
        });

        compare_positions(id_position, code);
        /*
                if($(this).prop('checked')){
                   compare_positions(id_position, code);
                   }else{
                       compare_delete(id_position, code)
                   }
                */
		//if (arr[1] != undefined) code = arr[1]; else code = 0;
		//compare_positions(id_position, code);
	});
		
	$('.compare_block').on('click', '.compare_position_compare', function(e)
		{
		arr = $(this).parents('.compare_block').data('id').split('_');
		var id_position = arr[0];
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		compare_positions(id_position, code);
		});
		
	$('#catalog_pos_pricebox').on("click", '#catalog_pos_compare', function(e)
		{
		var id_position = $.getUrlVar('id');
		var code = $.getUrlVar('code');
		if (code == undefined) code = 0;
		compare_positions(id_position, code);
		});
		
	$('.compare_block').on('click', '.compare_position_compare', function(e)
		{
		arr = $(this).parents('.compare_block').data('id').split('_');
		var id_position = arr[0];
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		compare_positions(id_position, code);
		});
		
		
	$('.related_list').on('click', '.related_compare', function(e)
		{
		arr = $(this).parents('.related_list').data('id').split('_');
		var id_position = arr[0];
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		compare_positions(id_position, code);
		});
		
	$('.recommended_list').on('click', '.recommended_compare', function(e)
		{
		arr = $(this).parents('.recommended_list').data('id').split('_');
		var id_position = arr[0];
		var code;
		if (arr[1] != undefined) code = arr[1]; else code = 0;
		compare_positions(id_position, code);
		});

	$('#main_recycle, #fixed_recycle').on('click', function(e)
		{
		var sum_title = $('#main_recycle_sum').html();
		var pos = sum_title.indexOf("руб.");
		if (pos == -1) 
			{
			alert('Ваша корзина пока пуста!');
			e.preventDefault();
			}
		});
		
	});