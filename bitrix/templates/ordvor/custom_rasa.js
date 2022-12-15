$(function(){
	$('.owl-carousel-new-products').owlCarousel({
	    loop:false,
	    nav:true,
	    dots: false,
	    items:1,
	    navText: ['<div class="prev slick-arrow" style=""><span class="icon-site icon-arrow-prev"></span></div>','<div class="next slick-arrow" style=""><span class="icon-site icon-arrow-next"></span></div>'],
	})	
});

$(function(){
	$('.owl-carousel-action-products').owlCarousel({
	    loop:false,
	    nav:true,
	    dots: false,
	    items:1,
	    navText: ['<div class="prev slick-arrow" style=""><span class="icon-site icon-arrow-prev"></span></div>','<div class="next slick-arrow" style=""><span class="icon-site icon-arrow-next"></span></div>'],
	})	
});



$(function(){
	$('.owl-carousel-viewed-products').owlCarousel({
	    loop:false,
	    nav:true,
	    dots: false,
	    items:4,
	    responsive : {
	        0 : {
	        	items:1
	        },
	        480 : {
	        	items:2
	        },
	        768 : {
	        	items:3
	        },
	        991: {
	        	items: 4
	        }
	    },
	    navText: ['<div class="prev slick-arrow" style=""><span class="icon-site icon-arrow-prev"></span></div>','<div class="next slick-arrow" style=""><span class="icon-site icon-arrow-next"></span></div>'],
	})	
});


$(window).ready(function() {
	$(".registration-phone").mask("0000 000-00-00",{ placeholder: ""});
});
/*показать скрыть фильтр каталога в мобильной версии*/
$(document).ready(function(){
	$(window).on('click', function(e){
		let filterContainer = $('.catalog-filters');
		let filterToggle = $('.filter-toggle-container');
		if(filterContainer.length > 0){
			if(filterContainer.has(e.target).length == 0){
				if(filterToggle.is(e.target)){
					if(filterContainer.hasClass('active')){
						filterContainer.removeClass('active');
					} else {
						filterContainer.addClass('active');
					}
				} else {
					if(filterContainer.hasClass('active')){
						e.preventDefault();
						filterContainer.removeClass('active');
					}
				}
			}
		}
	});
});

function sendSalesFormMessage() {
	BX.ajax({
		url: '/ajax/send_subscription.php',
		data: $(".subscription-form").serialize(),
		method: 'POST',
		dataType: 'json',
		timeout: 30,
		async: true,
		processData: true,
		scriptsRunFirst: true,
		emulateOnload: true,
		start: true,
		cache: false,
		onsuccess: function(data){
			$("#message_id").hide();
			$(".subscribe-success").show();
		},
		onfailure: function(){
			
		}
	});
	return false;
}


function initSliderRecommend(){
	var carousels = $('.owl-carousel-products-slider');
	
	if(carousels.length > 0){
		
		carousels.each(function(){
			
			var curr = $(this);
			
			var container = curr.closest('.container-slider');
			
			var lg = 3;
			
			curr.find('.lazy').each(function(){
				
				var item = $(this),
					img = item.attr('data-bg');				
				
				if(img){
					item.css('background-image', 'url(' + img + ')');
				}
				
				
			});
			
			if(container.length > 0){
				lg = container.attr('data-lg') ? container.attr('data-lg') : lg
			}
			
			 curr.owlCarousel({
					loop:false,
					nav:true,
					dots: false,
					items: lg,
					responsive : {
						0 : {
							items:1
						},
						480 : {
							items:2
						},
						768 : {
							items:3
						},
						991: {
							items: lg
						}
					},
					navText: ['<div class="prev slick-arrow" style=""><span class="icon-site icon-arrow-prev"></span></div>','<div class="next slick-arrow" style=""><span class="icon-site icon-arrow-next"></span></div>'],
				});	
			
		});
		
				
}
	}



			