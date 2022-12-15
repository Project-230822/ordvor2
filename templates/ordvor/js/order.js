function auth_enter2()
	{
	email = $('input[name=order_auth_email]').val();
	pass = md5($('input[name=order_auth_pass]').val());
	var location = document.location.href;
	
	$("#order_status").empty();
	$.ajax(
		{
		url: "/ajax/order/auth.php",
		type: "GET",
		data: { "location": location, "email": email, "pass": pass },
		cache: false,			
		success: function(response)
			{
			if (response != '') $("#order_status").append(response);
			}
		});
	}

function order_enter()
	{


	arr = new Object();
	arr['phone'] = $('input[name=order_phone]').val();
	arr['email'] = $('input[name=order_email]').val();
	arr['name'] = $('input[name=order_name]').val();
	arr['delivery_method'] = $('input[name=delivery_method]:checked').val();
	arr['payment_method'] = $('input[name=payment_method]:checked').val();

	if (arr['delivery_method'] != '1')
		{
		arr['city'] = $('input[name=order_city]').val();
		arr['addr'] = $('input[name=order_addr]').val();
		arr['index_number'] = $('input[name=order_index_number]').val();
		}
	else
		{
		arr['city'] = '';
		arr['addr'] = '';
		arr['index_number'] = '';
		}

	arr['notes'] = $('textarea[name=order_notes]').val();

	if (arr['delivery_method'] == 1) arr['pickup'] = $('select[name=order_pickup'+arr['delivery_method']+']').val(); else arr['pickup'] = 0;

	console.log(arr);
	
	$.ajax(
		{
		type: "POST",
		url: "/ajax/order/delivery.php",
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
	
	//console.log(obj);
	//return;
	
	switch(status) 
		{
		case 1:
		document.location = '/';
		break;
		
		case 2:
		status_word = obj.status_word;
		var field = obj.field;
		
		if(field){
			var formOrder = $('.order-shop');
			var fieldEl = formOrder.find('[name="'+field+'"]');
			
			formOrder.find('.hasError').removeClass('hasError');
			fieldEl.addClass('hasError');
			fieldEl.closest('.order-step').find('.order-step-header').click();;
		}
		
		alert(status_word);
		break;
		
		case 3:
		var order_id = obj.order_id;
		var item = '';
		jQuery('#order_table .order_table').each(function(e, v) {
			item += '{';
			item += '"id": "' + $(v).attr('data-id') + '",';
			item += '"name": "' + $(v).find('.order_table_name').attr('title') + '",';
			item += '"price": "' + $(v).find('.order_table_price span').text() + '",';
			item += '"quantity": "' + $(v).find('.order_table_numb_input input').val() + '"';
			item += '},';
		});
        console.log(item);
		console.log(dataLayer.push({
            "ecommerce": {
                "purchase": {
                    "actionField": {
                        "id" : order_id
                    },
                    "products": [
                        item
                    ]
                }
            }
        }));
		dataLayer.push({
		    "ecommerce": {
		        "purchase": {
		            "actionField": {
		                "id" : order_id
		            },
		            "products": [
		            item
		            ]
		        }
		    }
		});
		status_word = obj.status_word;


		$.magnificPopup.open({
			items: {
				src: $('.js-order-complete'),
				type: 'inline'
			},
            callbacks: {
                open: function() {
                    // Will fire when this exact popup is opened
                    // this - is Magnific Popup object
                },
                close: function() {
                    document.location = '/';
                }
            }
		});

            //alert(status_word);
		break;
		
		default:
		}
	}

var pattern_email = new RegExp(/^((\"[\w-\s]+\")|([\w-]+(?:\.[\w-]+)*)|(\"[\w-\s]+\")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		
$(function()
	{
	var delivery_method = parseInt($('input[name=delivery_method]:checked').val());
	var arr = new Object();
	arr['delivery_method'] = delivery_method;
	
	$.ajax(
		{
		type: "POST",
		url: "/ajax/order/payment_method.php",
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
	var payment = obj.payment;
	var payment_array = payment.split(',');
	var price_type = obj.price_type;

	/*
	if (price_type == 1)
		{
		$('input[name=order_city]').prop('disabled', true);
		$('input[name=order_addr]').prop('disabled', true);
		$('input[name=order_index_number]').prop('disabled', true);
		}
	else
		{
		$('input[name=order_city]').prop('disabled', false);
		$('input[name=order_addr]').prop('disabled', false);
		$('input[name=order_index_number]').prop('disabled', false);
		}*/
	
	if ($('input[name=payment_method]:checked').length > 0) {

	var id_payment = parseInt($('input[name=payment_method]:checked').attr("id").replace("payment_method", ""));
	$('input[name=payment_method]').each(function()
		{
		var id = parseInt($(this).attr("id").replace("payment_method", ""));
		if (in_array(id, payment_array)) $('input#payment_method'+id+'[name=payment_method]').prop('disabled', false);
		else $('input#payment_method'+id+'[name=payment_method]').prop('disabled', true);
		});
	if (in_array(id_payment, payment_array)) $('input#payment_method'+id_payment+'[name=payment_method]').prop('checked', true);
	else 
		{
		$('input[name=payment_method]').prop('checked', false);
		$('input[name=payment_method]').each(function(e)
			{
			var id = parseInt($(this).attr("id").replace("payment_method", ""));
			if (in_array(id, payment_array)) 
				{
				$('input#payment_method'+id+'[name=payment_method]').prop('checked', true);
				return false;
				}
			});
		}

	}

	function deliveryUpdate(delivInput){
		var delivery_method = parseInt(delivInput);
		var arr = new Object();
		arr['delivery_method'] = delivery_method;
		$.ajax(
			{
				type: "POST",
				url: "/ajax/order/delivery_method.php",
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
		console.log(obj);
		var status = obj.status;
		var comments = obj.comments;
		var payment = obj.payment;

		var sum_word = obj.sum_word;
		var delivery_word = obj.delivery_word;
		var sum_all_word = obj.sum_all_word;
		var discount = obj.discount;

		if (status == 1)
		{
			/*$('#delivery_sum span').html(sum_word);
			$('#delivery_sum_delivery span').html(delivery_word);
			$('#delivery_sum_all span').html(sum_all_word);*/
			var sumEl = $('#basket-sum-full').find('.js-val');
			var deliveryEl =  $('#basket-delivery-full').find('.js-val');
			var discountEl =  $('#basket-sum-discount').find('.js-val');
			var sumResEl =  $('#basket-sum-result').find('.js-val');

			if(sumEl.length){
				//sumEl.html(sum_word);
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

		}
		if (comments == '') $('#delivery_sum_comments').hide(); else $('#delivery_sum_comments').show();
		$('#delivery_sum_comments').html(comments);

		var payment_array = payment.split(',');
		var price_type = obj.price_type;

		var id_payment = parseInt($('input[name=payment_method]:checked').attr("id").replace("payment_method", ""));
		$('input[name=payment_method]').each(function()
		{
			var id = parseInt($(this).attr("id").replace("payment_method", ""));
			if (in_array(id, payment_array)) $('input#payment_method'+id+'[name=payment_method]').prop('disabled', false);
			else $('input#payment_method'+id+'[name=payment_method]').prop('disabled', true);
		});
		if (in_array(id_payment, payment_array)) $('input#payment_method'+id_payment+'[name=payment_method]').prop('checked', true);
		else
		{
			$('input[name=payment_method]').prop('checked', false);
			$('input[name=payment_method]').each(function(e)
			{
				var id = parseInt($(this).attr("id").replace("payment_method", ""));
				if (in_array(id, payment_array))
				{
					$('input#payment_method'+id+'[name=payment_method]').prop('checked', true);
					return false;
				}
			});
		}
	}

	$('input[name=delivery_method]').on('change', function(e)
		{
			deliveryUpdate($(this).val());
		});

	$(document).ready(function () {
		deliveryUpdate(1);
	});

	$('#order_noauth').on('click', '#order_noauth_enter', function(e)
		{
		auth_enter2();
		});
	
	$('#order_noauth').on('keydown', '#order_noauth_email input, #order_noauth_pass input', function(e)
		{
		if (e.keyCode == 13) auth_enter2();
		});
	
	$('#order_submit').on('click', function(e)
		{

		order_enter();
			
		yaCounter31129606.reachGoal('otprav_zakaz');
		return true;
		});


	$('#make-order').on('click', function(e)
	{

		e.preventDefault();

		if($(this).hasClass('disabled-btn')){
			return;
		}

		order_enter();

		//yaCounter31129606.reachGoal('otprav_zakaz');
		return true;
	});



	$('#delivery_promo_submit').on('click', function(e)
		{
		// var email = $('input[name=order_email]').val();
		// if (email == '')
		// 	{
		// 	alert("Введите e-mail");
		// 	return false;
		// 	}

		// if (!pattern_email.test(email))
		// 	{
		// 	alert("Введите правильный e-mail");
		// 	return false;
		// 	}
		var name_promo = $('input[name=delivery_promo]').val();
		/*if (name_promo == '')
			{
			alert('Введите промокод');
			return false;
			}*/
		var arr = new Object();
		arr['name_promo'] = name_promo;
		arr['delivery_method'] = $('input[name=delivery_method]:checked').val();

		$.ajax(
			{
			type: "POST",
			url: "/ajax/order/promo.php",
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
		console.log(obj);
		if (status == 1)
			{
			//alert('Ваш промокод учтен!');
			location.reload();
			}

		$('.order_table').each(function(e)
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
		$('#delivery_sum span').html(sum_word);
		$('#main_recycle_sum').html(sum_word);
		$('#fixed_recycle_sum').html(sum_word);

		if (status == 1)
			{
			var delivery_word = obj.delivery_word;
			$('#delivery_sum_delivery span').html(delivery_word);
			}

		var sum_all_word = obj.sum_all_word;
		$('#delivery_sum_all span').html(sum_all_word);
		});
		
	});