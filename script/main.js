$(document).ready(function() {

	$('.slide').css('height',  $(window).height() );

});

$(window).resize(function() {

	$('.slide').css('height', $(window).height());
	
});