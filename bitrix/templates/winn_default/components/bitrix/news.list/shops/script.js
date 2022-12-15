$(document).ready(function() {
	ymaps.ready(initPharmList);
	
	$(document).on("click", ".select-city", function() {
		$(".select-insert-city").css("display","flex");
		$(".cities").show();
		$("body").css("overflow","hidden");
	});
	$(document).on("click", ".select-insert-city", function() {
		$(".select-insert-city").css("display","none");
		$(".cities").hide();
		$("body").css("overflow","auto");
	});
});

function initPharmList () {
	if($("#map").length > 0) {
		var thisIDActive = $(".map-data.active").attr('data-index');
		var centerX = $(".map-data.active").attr("data-yandex-x");
		var centerY = $(".map-data.active").attr("data-yandex-y");
	}

	var myMap = new ymaps.Map("map", {
	    center: [centerX, centerY],
	    zoom: 11, 
	    controls: ['zoomControl']
	});
	
    myMap.behaviors.disable('scrollZoom');
	
	function disableDrag() {
        if ($(window).width() <= '768'){
			myMap.behaviors.disable('drag');
    	}
        else {
        	myMap.behaviors.enable('drag');
        }
    }

    disableDrag();
    
    $(window).resize(function(){
    	disableDrag();
    });
	
	var Placemark = {}; 
	
	$(".map-data").each(function(){
	
	    var X = $(this).attr("data-yandex-x");
	    var Y = $(this).attr("data-yandex-y");
	        
	    var Obj = $(this).attr("data-index");
    	var pin = '/images/pin.png';
	          
	    Placemark[Obj] = new ymaps.Placemark([X,Y], {
	    	balloonContent: "",
        	customIndexOfPlacemark: Obj
	    },{
	        iconImageHref: pin, 
	        iconImageSize: [33, 40],
	        iconImageOffset: [-15, -40],
	        balloonBorder: false,
	        iconLayout: 'default#imageWithContent',
	        hideIconOnBalloonOpen: false,
	        balloonCloseButton: false,   
	        balloonPanelMaxMapArea: Infinity
	    });
	
	    myMap.geoObjects.add(Placemark[Obj]);
	});
}