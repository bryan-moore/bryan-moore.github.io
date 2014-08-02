$(document).ready(function() {

    // enable vibration support
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;



    $('.theme-change').on('click', function() {
        if (navigator.vibrate) {
            navigator.vibrate(500);
        }
        $('html').toggleClass('dark');
    });



});