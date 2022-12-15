$(document).ready(function(){
	
	//Валидация email
	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}
	
	//Выбор звёздочек	
	$('.add-review-form .star-wrap').on('click', '.fa', function(){
		var count = $(this).attr('count');
		$(".add-review-form .star-wrap .fa").removeClass("yellow");
		$('#star-value').val(count);
		for (var i = 0; i <= count; i++) {
		   $(".add-review-form .star-wrap .fa#star-"+i).addClass("yellow");
		}
	});
	
	//Ховер звёздочек
	$('.add-review-form .star-wrap .fa').hover(function(){
		var count = $(this).attr('count');
		$(".add-review-form .star-wrap .fa").removeClass("yellow");
		for (var i = 0; i <= count; i++) {
		   $(".add-review-form .star-wrap .fa#star-"+i).addClass("yellow");
		}
	});
	//Ховер звёздочек 2
	$('.add-review-form .star-wrap').mouseleave(function(){
		var count = $('#star-value').val();
		
		$(".add-review-form .star-wrap .fa").removeClass("yellow");
		for (var i = 0; i <= count; i++) {
		   $(".add-review-form .star-wrap .fa#star-"+i).addClass("yellow");
		}
	});
	
	//Валидация и отправка отзыва
    var addReviewProgress = false;
    $("#add-review-form .add-review").click(function(){
    	var errors = false;
    	var email = $('#add-review-form #review-email').val();
    	
    	$.each($('#add-review-form .need'), function(index, value) {
    		if (!$(this).val()) {
    			errors = true;
    			$(this).parent('.mf-name').addClass('error');
            } else {
    			$(this).parent('.mf-name').removeClass('error');
            }
    	});
    	
    	if(!validateEmail(email)) {
        	console.log(validateEmail(email));
			errors = true;
			$('.mf-name.email').addClass('error');
    	} else {
    		$('.mf-name.email').removeClass('error');
    	}
		
    	if (!errors && !addReviewProgress) {
    		
    		addReviewProgress = true;
    		
    		var inputVal = $('#add-review-form').serialize();
    		var topInfo = $(document).scrollTop();

            $.ajax({
                async: true,
                url: '/ajax/review_product.php',
                type: "POST",
                data: inputVal,
                success: function(data) {
                	addReviewProgress = false;
                	if(data==1) {
                		$("#add-review-form").hide();
                		$('.success-message-ok').fadeIn();
                		var messageInfo = $('.success-message-ok').offset().top;
                		if(topInfo>messageInfo)
                			$("html, body").animate({scrollTop: messageInfo-100 + "px"});
                		console.log(topInfo);
                		console.log(messageInfo);
                	} else {
						console.log(data);
                		$('.success-message-error').fadeIn();
                		var messageInfo = $('.success-message-error').offset().top;
                		if(topInfo>messageInfo)
                			$("html, body").animate({scrollTop: messageInfo-100 + "px"});
                		console.log(topInfo);
                		console.log(messageInfo);
                	}
                },
                error: function(data) {
                	alert('Произошла ошибка. Попробуйте позже.');
                }
            });
        }
    	event.preventDefault();
    });
    
  //Голосование за отзыв
    var rateProgress = false;
    $(".reviews-wrap .bttn-rate").click(function(){
    	if(!rateProgress) {
	    	var idRate = $(this).attr('data-id');
	    	var countRate = $(this).find('span').html();
	    	var newCountRate = Number(countRate)+1;
	    	
	    	rateProgress = true;
	        $.ajax({
	            async: true,
	            url: '/ajax/review_product.php',
	            type: "POST",
	            data: "RATE_ID="+idRate+"&COUNT_RATE="+countRate,
	            success: function(data) {
	            	rateProgress = false;
	            	if(data==1) {
						$('#count-rate-'+idRate).html(newCountRate);
	            	} else {
						console.log(data);
	            	}
	            },
	            error: function(data) {
	            	alert('Произошла ошибка. Попробуйте позже.');
	            }
	        });
    	}
    	event.preventDefault();
    });
    
  //Переключение пунктов (товары-отзывы)
    $(".change-product-info h3").click(function(){
    	var idBlock = $(this).attr('attr-block');
    	if(!$(this).hasClass('active')) {
    		$(".change-product-info h3").removeClass('active');
    		$(this).addClass('active');
    		$('.bottom-block-wrap').hide();
    		$('#'+idBlock).show();
    	}
        
    	event.preventDefault();
    });
    
});

$(document).on('ready', function(){
    var loading = false;
    $("#infinity-next-page").click(function(){
        if ($('#infinity-next-page').size() && !loading) {
            loading = true;
            $.get($('#infinity-next-page').attr('href'), {is_ajax: 'y'}, function(data){
                $('#infinity-next-page').after(data);
                $('#infinity-next-page').remove();
                loading = false;
            });
        }
    	event.preventDefault();
    });
});