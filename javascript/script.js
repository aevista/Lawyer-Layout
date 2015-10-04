$(document).ready(function(){

	$('h2').fadeOut('slow');
	$('h2').fadeIn('fast');
	$('.navButton').hover(function(){
		$(this).fadeTo('.5');
	});

});