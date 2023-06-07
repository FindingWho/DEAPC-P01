$(document).ready(function(){
	$(function(){
		new WOW().init();
	});

	var selector = $(".hero");

	selector.owlCarousel({
		autoplay: true,
		autoplayTimeout: 3500,
		autoplaySpeed: 250,
		autoplayHoverPause: true,
		loop: true,
		margin: 0,
		dots: false,
		nav: false,
		items: 1,
		onInitialize: function() {
			selector.trigger('stop.owl.autoplay');
			setTimeout(function() {selector.trigger('play.owl.autoplay')}, 20)
		},
	})

	$('.product .prod-img img').hover(function() {
		$(this).toggleClass('zoomfilter');
	})

	$(window).scroll(function() {
		if ($(window).scrollTop() > 80) {
			$('.menu-nav').addClass('scroll');
		}
		else {
			$('.menu-nav').removeClass('scroll');
		}

	})
});
