// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/slide2.jpeg", 
	 		 "images/slide6.jpeg",
			 "images/slide4.jpeg"
	 			], 	{duration: 3200, fade: 1300});
		});
})