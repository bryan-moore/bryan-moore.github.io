$(document).ready(function() {

	updateSize(15);

	$(".nano").nanoScroller();
	
	$('.nav a').click(function() {
		$('.nav a').removeClass('current');
		$(this).addClass('current');
	});

	$('#intro').click(function() {
		$(".nano").nanoScroller({ scrollTo: $('.intro') });	
	});
	$('#about').click(function() {
		$(".nano").nanoScroller({ scrollTo: $('.about') });	
	});
	$('#work').click(function() {
		$(".nano").nanoScroller({ scrollTo: $('.work') });	
	});
	$('#contact').click(function() {
		$(".nano").nanoScroller({ scrollTo: $('.contact') });	
	});
	/*
	$('.work').waypoint(function() {
		$('.nav a').removeClass('current');
		$('.nav #intro').addClass('current');
		console.log('work top');
	});
	
	$('.about').waypoint(function() {
		$('.nav a').removeClass('current');
		$('.nav #about').addClass('current');
		console.log('about top');
	});*/

});

$(window).resize(function() {
	updateSize(0);
});

function updateSize(widthOffset) {
	$('.intro').css('height',$(window).height());
	$('#scroller-container').css('height', $(window).height());
	$('#scroller-container').css('width', $(window).width() + widthOffset);
}