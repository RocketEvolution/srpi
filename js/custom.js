$(document).ready(function() {

	// BIND NAVIGATION TO SCROLL
	$(window).scroll(function(){
		$('.header').toggleClass('scrolled', $(this).scrollTop() > 5);
		$('#responsivemenu').toggleClass('scrolled', $(this).scrollTop() > 5);
	});

	// SHOW RESPONSIVE MENU
	$('#responsivemenubutton').click(function() {
		$('#responsivemenu').toggleClass('show');
	});
	
	// SLIDESHOW
	$('#slideshow').cycle({ 
	    fx:     'fade', 
	    speed:  500,
		slideResize: true,
		containerResize: false,
		width: '100%',
		fit: 1,
	    next:   '#slidenext', 
	    prev:   '#slideprev'
	});

// SLIDESHOW
});