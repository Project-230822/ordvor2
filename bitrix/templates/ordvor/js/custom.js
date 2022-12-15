jQuery(document).ready(function () {
	
	$("input[type='tel']").mask("+7Z000000000",{ placeholder: "", clearIfNotMatch: true, 'translation': {Z: {pattern: /9/}}});
	
	//Форма "помогите найти товар"
	var processing = false;
	$("#find-product-form .btn").click(function(event){
    	var errors = false;
    	$.each($('#find-product-form input.need'), function(index, value) {
    		if (!$(this).val()) {
    			errors = true;
    			$(this).parent().addClass('error');
            } else {
    			$(this).parent().removeClass('error');
            }
    	});

    	if (!errors && !processing) {    
    		processing = true;  
    		
    		$("#find-product-form .preloader").fadeIn("fast");
    		
    		var inputVal = new FormData(document.getElementById('find-product-form'));

            $.ajax({
                async: true,
                url: '/ajax/help_find_product.php',
                type: "POST",
                data: inputVal,
                processData: false, 
                contentType: false,
                success: function(data) {
                	if(!data) {
                		$("#find-product-form")[0].reset();
                		$('#find-product-form').hide();
                		$('.find-product-success').fadeIn();
                	} else {
                		$('#find-product-form .info').html(data);
                	}
                	processing = false;
            		$("#find-product-form .preloader").fadeOut("fast");
                },
                error: function(data) {
                	alert('Произошла ошибка. Попробуйте позже.');
            		$("#find-product-form .preloader").fadeOut("fast");
                	processing = false;
                }
            });
        }
    	event.preventDefault();
    });
	
	var lazyLoadInstance = new LazyLoad({
	  // Your custom settings go here
	});

    BX.addCustomEvent('onajaxsuccessfinish', BX.delegate(function () {
        lazyLoadInstance.update();
    }));

    jQuery('.catalog_filter_title').click(function () {
       jQuery(this).parents('.catalog_filter').find('.catalog_filter_checklist').slideToggle();
       jQuery(this).parents('.catalog_filter').find('.catalog_filter_rangelist').slideToggle();

       if(jQuery(this).parents('.catalog_filter').hasClass('activeFilter')){
           jQuery(this).parents('.catalog_filter').removeClass('activeFilter');
       }else{
           jQuery(this).parents('.catalog_filter').addClass('activeFilter');
       };
    });

    jQuery('#catalog_pos_clarify').on('click', function(e) {
        e.preventDefault();
        jQuery('.b-modal').addClass('active');
        jQuery('#form-name-prod').val(jQuery('#catalog_pos_title h1').text());
        var location = window.location.href;
        jQuery('#form-url-prod').val(location);
    });

    jQuery('.b-overlay').on('click', function() {
        jQuery('.b-modal').removeClass('active');
    });

    jQuery('.form_price').submit(function () {
        var route = "https://shop.ordvor.ru/mail/custom_mail3.php";
        var formNm = $(this);
        jQuery.ajax({
            type: 'POST',
            dataType: 'html',
            // dataType: 'json',
            url: route, // Обработчик формы отправки
            data: formNm.serialize(),
            success: function(response) {
                jQuery('.form_price .row-group').html(response);
            },
            error: function(response) {
              jQuery('.form_price .row-group').html("Возникла ошибка при отправке формы. Попробуйте еще раз");

            }
        });
        return false;
    });

    jQuery('.form-callback form').submit(function () {
        var route = "/mail/custom_mail3.php";
        var formNm = $(this);

        var container = $('#callback')

        jQuery.ajax({
            type: 'POST',
            dataType: 'html',
            // dataType: 'json',
            url: route, // Обработчик формы отправки
            data: formNm.serialize(),
            success: function(response) {
                container.find('.result-form').html(response);
            },
            error: function(response) {
                container.find('.result-form').html("Возникла ошибка при отправке формы. Попробуйте еще раз");

            }
        });
        return false;
    });




    jQuery(".push_sales").on('click', function() {
        jQuery('.modalform').slideToggle(500);
        jQuery('.bg_buys').slideToggle(450);
		
		console.log( jQuery('.bg_buys'));
    });
    jQuery('.bg_buys').click(function(){
        jQuery(this).slideToggle(500);
        jQuery('.modalform').slideToggle(450);
    });
    jQuery('body').delegate('.closs', 'click', function() {
        jQuery('.bg_buys').slideToggle(500);
        jQuery('.modalform').slideToggle(450);
    });
    jQuery('.bg_buys2').click(function(){
        jQuery(this).slideToggle(500);
        jQuery('.modalform2').slideToggle(450);
        jQuery.cookie('visit', true);
        location.reload();
    });
    jQuery('body').delegate('.closs2', 'click', function() {
        jQuery('.bg_buys2').slideToggle(500);
        jQuery('.modalform2').slideToggle(450);
        jQuery.cookie('visit', true);
        location.reload();
    });
    jQuery('.form_sales').submit(function () {
        var route = "https://shop.ordvor.ru/mail/custom_mail.php";
        var formNm = $(this);
        jQuery.ajax({
            type: 'POST',
            dataType: 'html',
            // dataType: 'json',
            url: route, // Обработчик формы отправки
            data: formNm.serialize(),
            success: function(response) {
                document.getElementById('message_id').innerHTML = response;

            },
            error: function(response) {
                document.getElementById('message_id').innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";

            }
        });
        return false;
    });
    jQuery('.form_no_search').submit(function () {
        var route = "https://shop.ordvor.ru/mail/custom_mail2.php";
        var formNm = $(this);
        jQuery.ajax({
            type: 'POST',
            dataType: 'html',
            // dataType: 'json',
            url: route, // Обработчик формы отправки
            data: formNm.serialize(),
            success: function(response) {
                document.getElementById('message_search').innerHTML = response;

            },
            error: function(response) {
                document.getElementById('message_search').innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";

            }
        });
        return false;
    });

    if ( jQuery.cookie('visit') == undefined ){
        jQuery.cookie('visit', true);
        // $(document).mouseleave(function () {
        //     jQuery('.modalform2').slideToggle(500);
        //     jQuery('.bg_buys2').slideToggle(450);
        // });
    } else {
        jQuery('body').append('<div style="display: none;"><p>Вы у нас уже были :)</p><a href="#" id="remove_cookie">Удалить куки!</a></div>');
        jQuery('#remove_cookie').click(function(e){
            e.preventDefault();
            jQuery.removeCookie('visit');
            jQuery(this).after("<span>Куки удалены успешно! Перезагрузите страницу :)</span>").remove();
        });
    }

    jQuery('.m_m').click(function() {
        jQuery('.shop-menu').slideToggle(500);
    });
    jQuery('.show_ff').click(function() {
        jQuery('#catalog_filter').slideToggle(500);
    });
    if(window.innerWidth > 640){

    }
    // jQuery(document).ready(function () {
        jQuery("#order_submit div").on('click', function() {
            yaCounter31129606.reachGoal('oform_zakaz');
            return true;
        });
    jQuery(".cont-form-sub.test").on('submit', function() {
        yaCounter31129606.reachGoal('otprav_zakaz');
        return true;
    });
    // });

    jQuery('.product-carousel .items-list').slick({
        'prevArrow': '<div class="prev"><span class="icon-site icon-arrow-prev"></span></div>',
        'nextArrow': '<div class="next"><span class="icon-site icon-arrow-next"></span></div>'
    });

/*
    jQuery('.main-popular .items-list').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 2,
        infinite: false,
        'prevArrow': '<div class="prev"><span class="icon-site icon-arrow-prev"></span></div>',
        'nextArrow': '<div class="next"><span class="icon-site icon-arrow-next"></span></div>',

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    rows: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]


    });
*/
    jQuery('.viewed-products .items-list').slick({

        slidesToShow: 5,
        slidesToScroll: 1,

        'prevArrow': '<div class="prev"><span class="icon-site icon-arrow-prev"></span></div>',
        'nextArrow': '<div class="next"><span class="icon-site icon-arrow-next"></span></div>',

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]


    });

    jQuery('.compare-slider .items-list').slick({

        slidesToShow: 3,
        slidesToScroll: 1,

        'prevArrow': '<div class="prev"><span class="icon-site icon-arrow-prev"></span></div>',
        'nextArrow': '<div class="next"><span class="icon-site icon-arrow-next"></span></div>',

        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]


    });






    jQuery('.cmn-toggle-switch').on('click', function(e){
        e.preventDefault();
        var item = $(this);
        var container = $(this).closest('.toggle-container');
        var toggle = container.find('.toggle-content');

        if (item.hasClass("active")){
            item.removeClass("active");
            toggle.removeClass("opened");
            container.removeClass("is-active");
            $('body .toggle-container').children('.menu-overlay').remove();
            $('body').removeClass('body-hidden')
        }else{
            item.addClass("active");
            toggle.addClass("opened");
            container.addClass("is-active");

            var overlay = $('body .toggle-container').append('<div class="menu-overlay"></div>').children('.menu-overlay');
            overlay.append('<div class="menu-overlay-inner"></div>');

            $('body').addClass('body-hidden');

            overlay.on('click', function(){
                item.click();
            });
        }

    });


    jQuery('.main-nav').on('click', '.arrow', function(e){
        e.preventDefault();
        e.stopPropagation();

        var submenu = jQuery(this).closest('.parent-item').children('.submenu');

        if(submenu.length<1){
            submenu = jQuery(this).closest('.parent-item').children('.submenu-container').children('.submenu');
        }

        if(submenu.hasClass('submenu-opened')){
            submenu.removeClass('submenu-opened');
        }
        else{
            submenu.addClass('submenu-opened');
        }


    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });


    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows: true,
        vertical: true,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 9,
                    vertical:false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4
                }
            },

            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('ul.tabs-caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.block-tabs').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $('.search-toggle-mobile').on('click', function(){
        //

        $('.header .search-col').toggleClass('is-opened');
    });

    var ajaxPagerContainer = $('.js-elements-container');

    //console.log(ajaxPagerContainer);

    if(ajaxPagerContainer.length){

        ajaxPagerContainer.data('loading', false);  //elements-group-js

        ajaxPagerContainer.on('click', '.ajax-pagination', function(e) {

            e.preventDefault();



            var that = $(this);
            var container = that.closest('.js-elements-container');
            var url = that.attr('href');



            if (!container.data('loading') && url) {
                container.data('loading', true);

                $.ajax(
                {
                    url: url,
                    type: "GET",
                    cache: false,
                    //async: false,
                    success: function(response)
                    {
                        var result = $(response);
                        var cont =  result.find('.js-elements-container');
                        var next = cont.find('.ajax-pagination');
                        var pagination = cont.find('.js-catalog-pagination');

                        container.find('.elements-group-js').append(cont.find('.element-group-js'));
                        container.data('loading', false);
                        container.find('.js-catalog-pagination').html(pagination.html());

                        if(next.length>0){
                            that.attr('href', next.attr('href'));
                        }else{
                            that.remove();
                        }
                    }
                });


                /*

                $('<div></div>').load(url, function() {

                    var result = $(this);
                    var next = result.find('.ajax-pagination');

                    console.log(result);


                    container.find('.elements-group-js').append(result.find('.element-group-js'));

                    if(next.length>0){
                        that.attr('href', next.attr('href'));
                    }else{
                        that.remove();
                    }



                    container.data('loading', false);
                });

                */
            }


        });

    }


    $('.order-step').on('click', '.btn-next-step', function(e){
        e.preventDefault();

        var orderStep = $(this).closest('.order-step');
        var nextStep = orderStep.next();

        var idStep = orderStep.attr('id');

        if(idStep == 'order-personal'){

            var phone = $.trim(orderStep.find('[name=order_phone]').val());

            if(phone == ''){
                alert('Поле «Контактный телефон» не заполнено');
                return;
            }

            var email = $.trim(orderStep.find('[name=order_email]').val());

            if(email == ''){
                alert('Поле «E-mail» не заполнено');
                return;
            }else{

                var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                if(reg.test(email) == false) {
                    alert('Введите корректный e-mail');
                    return false;
                }

            }

            var name = $.trim(orderStep.find('[name=order_name]').val());

            if(name == ''){
                alert('Поле «ФИО» не заполнено');
                return;
            }else{
                var arr = name.split(' ');
                console.log(arr);
                if(arr.length < 3){
                    alert( 'Уважаемый покупатель! Просим Вас ввести полностью Фамилию, Имя и Отчество');
                    return;
                }
            }

            /*
            var order_city = $.trim(orderStep.find('[name=order_city]').val());

            if(order_city == ''){
                alert('Поле «Город» не заполнено');
                return;
            }


            var order_addr = $.trim(orderStep.find('[name=order_addr]').val());

            if(order_addr == ''){
                alert('Поле «Адрес» не заполнено');
                return;
            }

            var order_index_number = $.trim(orderStep.find('[name=order_index_number]').val());

            if(order_index_number == ''){
                alert('Поле «Индекс» не заполнено');
                return;
            }
            */

            if( orderStep.find('[name=agreement]:checked').length == 0){
                alert('Вы должны дать согласие на обработку персональных данных');
                return;
            }


        }

        orderStep.removeClass('active');
        nextStep.addClass('active');
    });

    $('.order-step-header').on('click', function(){
        var container = $(this).closest('.order-steps-list');
        container.find('.order-step').removeClass('active');
        $(this).closest('.order-step').addClass('active');
    });

    $('#order-delivery .btn-next-step').on('click', function(){
        $('#make-order').removeClass('disabled-btn');
    });

    $('#order-payment .order-step-header').on('click', function(){
        $('#make-order').removeClass('disabled-btn');
    });

    $('.evaluate').on('click', function(e){

    	$(".product-item-detail-tab").removeClass("active");
    	$(".product-item-detail-tab-content").removeClass("active");
    	$(".product-item-detail-tab-content").css("display", "none");
    	
    	$('[data-value="comments"]').addClass("active");
    	$('[data-value="comments"]').css("display", "block");
    	
    	e.preventDefault();
    	
    	if ($(window).width() <= '768') {

    		var id = $(this).attr('href');
            var reviewTab = $("#mobile-tab-review");
    		
    	}
    	else {
            
            var id = $(this).attr('href');
            var reviewTab = $(id);

    	}
        if(reviewTab.length){
            reviewTab.click();
            $('html, body').animate({ scrollTop: reviewTab.offset().top }, 500);
        }    		
        
        

    });
    
    $('.in-stock').on('click', function(e){

    	$(".product-item-detail-tab").removeClass("active");
    	$(".product-item-detail-tab-content").removeClass("active");
    	$(".product-item-detail-tab-content").css("display", "none");
    	
    	$('[data-value="stores"]').addClass("active");
    	$('[data-value="stores"]').css("display", "block");
    	
    	e.preventDefault();
    	
    	if ($(window).width() <= '768') {

    		var id = $(this).attr('href');
            var reviewTab = $("#mobile-tab-review");
    		
    	}
    	else {
            
            var id = $(this).attr('href');
            var reviewTab = $(id);

    	}
        if(reviewTab.length){
            reviewTab.click();
            $('html, body').animate({ scrollTop: reviewTab.offset().top }, 500);
        }    		
        
        

    });


    $('.delivery-product .catalog_pos_available').on('click', function(e){
        e.preventDefault();

        var tabStock = $('#tab-stock');

        if(tabStock.length){
            tabStock.click();
            $('html, body').animate({ scrollTop: tabStock.offset().top }, 500);
        }


    });


    $('.reviews-summary .give-feedback').on('click', function(e){
        e.preventDefault();

        var point = $($(this).attr('href'));

        if(point.length){
            $('html, body').animate({ scrollTop: point.offset().top }, 500);
        }


    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false
    });
	
	 $('body').on('click', '.ajax-popup', function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $.magnificPopup.open({
            type: 'ajax',
            items: {
                src: url,
            }
        });
    });


    $('#main_search_input_results').mouseleave(function(){
       $(this).hide();
    });

    // $('.city-selector .current').on('click', function(e){
    //
    //     e.preventDefault();
    //
    //     var container = $(this).closest('.city-selector');
    //
    //     var list = container.find('.city-list');
    //
    //     list.slideToggle();
    // });
	
	
   /*  $('.city-selector .current').on('click', function () {
       $('.city_selector').fadeToggle();
       $('.city_selector_overlay').fadeToggle();
    });
    $('.city_selector_overlay').on('click', function () {
        $('.city_selector').fadeToggle();
        $('.city_selector_overlay').fadeToggle();
    });
    $('.city_selector_close').on('click', function () {
        $('.city_selector').fadeToggle();
        $('.city_selector_overlay').fadeToggle();
    }); */
	
	
    // $('.city_selector_search_item').on('keyup', function () {
    //     var length = $('.city_selector_search_item').val().length;
    //     $('.city_list_block_header').each(function () {
    //         if($(this).html().toLowerCase().indexOf($('.city_selector_search_item').val().toLowerCase()[0]) != 0){
    //             $(this).hide();
    //         }
    //
    //     });
    //     $('.city_item a').each(function () {
    //         if($(this).html().toLowerCase().indexOf($('.city_selector_search_item').val().toLowerCase()) != 0){
    //             $(this).parent().hide();
    //             $(this).parents('.city_selector_cities_column').hide();
    //
    //         }
    //         else {
    //             $(this).parent().show();
    //             $(this).parents('.city_selector_cities_column').show();
    //         }
    //     });
    //     if($('.city_selector_search_item').val().length == 0){
    //         $('.city_list_block_header').each(function () {
    //             $(this).show();
    //         });
    //     }
    // });
    $(document).on('keyup', '.city_selector_search_item', function () {
        var length = $('.city_selector_search_item').val().length;
        $('.city_item a').each(function () {
            if($(this).html().toLowerCase().indexOf($('.city_selector_search_item').val().toLowerCase()) < 0){
                if($(this).parent().attr('class') != 'city_not_show'){
                    $(this).parent().addClass('city_not_show');
                }
            }else{
                if($(this).parent().hasClass('city_not_show')){
                    $(this).parent().removeClass('city_not_show');
                }
            }
        });
        $('.city_selector_cities_block').each(function () {
            var all_block = $(this).find('.city_item').length;
            var hide_block = $(this).find('.city_not_show').length;
            if(all_block == hide_block){
                if($(this).attr('class') != 'city_not_show'){
                    $(this).addClass('city_not_show');
                }
            } else {
                if($(this).hasClass('city_not_show')){
                    $(this).removeClass('city_not_show');
                }
            }
        });

    });

    $('.city-selector .city-list').on('mouseleave', function(){
        $(this).slideUp();
    });

    $('body').on('click', '.question-city-btn .btn-no', function(){

        $(this).closest('.city-selector').find('.current').click();
        $(this).closest('.question-city').hide();

    });

    $('body').on('click', '.question-city-btn .btn-yes', function(){
        $(this).closest('.question-city').hide();
    });


    $('.like-block').on('click', '.like, .dislike', function(e){

        var json_text;
        var that =  $(e.target);
        var arr = new Object();
        var container = that.closest('.like-block');

        arr['like'] = false;

        if(that.hasClass('like')){
            arr['like'] = 1;
        }else if(that.hasClass('dislike')){
            arr['like'] = 0;
        }

        if(arr['like'] === false){
            return;
        }

        arr['entity_id'] = that.closest('.js-review-item').attr('data-id');

        console.log(JSON.stringify(arr));
        //return;


        $.ajax(
            {
                type: "POST",
                url: "/ajax/rating/update.php",
                dataType: "json",
                data: JSON.stringify(arr),
                contentType: "application/json; charset=utf-8",
                traditional: true,
                cache: false,
                async: true,
                success: function(response, textStatus, jqXHR)
                {
                    json_text = jqXHR.responseText;
                    var obj = new Object();
                    obj = JSON.parse(json_text);

                    console.log(obj);

                    if( obj.status == 1){

                        if( obj['count_like'] > 0){
                            container.find('.like .value').text(obj['count_like']);
                        }

                        if( obj['count_dislike'] > 0){
                            container.find('.dislike .value').text(obj['count_dislike']);
                        }

                        alert('Ваш голос учтен');
                    }else{
                        alert('Вы уже проголосовали');
                    }

                }
            });



    });


	if(location.host == 'shop.ordvor.ru' || location.host == 'komsomolsknaamure.ordvor.ru'){
		//var show = $.cookie('sw_show');		

		/*if(typeof show == 'undefined' || show != 1) {
			setTimeout(function(){
			
				$.magnificPopup.open({
				  items: {
					src: '#notice-popup',
					type: 'inline'
				  }
				});
				
				$.cookie('sw_show', '1', { expires: 1, path: '/' });	
				
			},1000);
		}*/

		//var itemMenu =  $(".main-nav .top-item>a[href='/sale/']").closest('.top-item');
		//$( '<li class="top-item"><a class="link change-time" title="Изменение режима работы" href="/izmenenie-rezhima-raboty/">Изменение режима работы</a></li>' ).insertAfter(itemMenu);
	}

	
});