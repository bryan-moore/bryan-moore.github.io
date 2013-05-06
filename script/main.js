$(document).ready(function() {

	updateSize();
	$("body").scrollTop(0);

	$("html").niceScroll({ 
		cursorborder:"none", 
		scrollspeed:"35",
		cursorborderradius:"0px" 
	});
	$('#intro').addClass('current');
	
	$('.nav a').click(function() {
		$('.nav a').removeClass('current');
		$(this).addClass('current');
	});

	scrollToHash('#intro','.intro');
	scrollToHash('#about','.about');
	scrollToHash('#work','.work');
	scrollToHash('#contact','.contact');
	
	$('.intro').waypoint(function() {
		$('.nav a').removeClass('current');
		$('#intro').addClass('current');
	}, { offset: '-50%' });

	$('.about').waypoint(function() {
		$('.nav a').removeClass('current');
		$('#about').addClass('current');
	}, { offset: '50%' });

	$('.about').waypoint(function() {
		$('.nav a').removeClass('current');
		$('#about').addClass('current');
	}, { offset: '-50%' });

	$('.work').waypoint(function() {
		$('.nav a').removeClass('current');
		$('#work').addClass('current');
	}, { offset: '50%' });

	$('.work').waypoint(function() {
		$('.nav a').removeClass('current');
		$('#work').addClass('current');
	}, { offset: '-50%' });

	$('.contact').waypoint(function() {
		$('.nav a').removeClass('current');
		$('#contact').addClass('current');
	}, { offset: '50%' });
	
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

function logoLink() {
	location.reload();
	$("body").scrollTop(0);
}