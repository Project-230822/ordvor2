function theRotator(object, time) 
	{
	$(object + '> div').css({opacity: 0.0});
	$(object + '> div:first').css({opacity: 1.0});
	setInterval(function(){ rotate(object) }, time);
	}
 
function rotate(object) 
	{	
	var current = ($(object + '> div.show')?  $(object + '> div.show') : $(object + '> div:first'));
	var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $(object + '> div:first') :current.next()) : $(object + '> div:first'));
  
	next.css({opacity: 0.0}).addClass('show').animate({opacity: 1.0}, 1000);
 	current.animate({opacity: 0.0}, 1000).removeClass('show');
	};