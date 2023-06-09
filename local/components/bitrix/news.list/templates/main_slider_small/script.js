$('.main-actions-slidebox').slick({
	arrows: false,
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	speed: 1000,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		},
	]
});