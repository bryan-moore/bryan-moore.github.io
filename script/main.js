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
	
	var wayOffset = '50%';	
	
	$('.íntro').waypoint(function() {
		console.log('intro');
		$('.nav a').removeClass('current');
		$('#intro').addClass('current');
	}, { offset: '-50%' });
	
	$('.about').waypoint(function() {
		console.log('about');
	}, { offset: wayOffset });

	$('.work').waypoint(function() {
		console.log('work');
	}, { offset: wayOffset });

	$('.contact').waypoint(function() {
		console.log('contact');
	}, { offset: wayOffset });

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