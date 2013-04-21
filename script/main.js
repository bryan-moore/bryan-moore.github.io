$(document).ready(function() {

	$('.intro').css('height',$(window).height());

	$('a#intro').addClass('current');

	$('.nav a').click(function() {
		$('.nav a').removeClass('current');
		$(this).addClass('current');
	});

	$('#intro').click(function() {
		$.scrollTo('.intro',500);	
	});
	$('#about').click(function() {
		$.scrollTo('.about',500);	
	});
	$('#work').click(function() {
		$.scrollTo('.work',500);	
	});
	$('#contact').click(function() {
		$.scrollTo('.contact',500);	
	});

	$('.work').waypoint(function() {
		/*$('.nav a').removeClass('current');
		$('.nav #intro').addClass('current');*/
		console.log('work top');
	});
	/*
	$('.about').waypoint(function() {
		$('.nav a').removeClass('current');
		$('.nav #about').addClass('current');
		console.log('about top');
	});*/

});

$(window).resize(function() {

	$('.slide').css('height', $(window).height());
	
	if( $('.intro').attr(position.top) = 0 ) {
		console.log('top');
	}

});