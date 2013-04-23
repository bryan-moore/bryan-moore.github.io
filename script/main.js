$(document).ready(function() {

	updateSize();

	$("html").niceScroll();
	$('#intro').addClass('current');
	
	$('.nav a').click(function() {
		$('.nav a').removeClass('current');
		$(this).addClass('current');
	});

	scrollToHash('#intro','.intro');
	scrollToHash('#about','.about');
	scrollToHash('#work','.work');
	scrollToHash('#contact','.contact');
		
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

function scrollToHash(trigger, destination) {
	$(trigger).click(function() {
		$(window).scrollTo(destination,'slow');	
	});
}

$(window).resize(function() {
	updateSize();
});

function updateSize() {
	$('.intro').css('height',$(window).height());
	$('.intro').css('width',$(window).width());
	//$('#scroller-container').css('height', $(window).height());
	//$('#scroller-container').css('width', $(window).width());
}