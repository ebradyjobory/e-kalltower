// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require fancybox


$(document).ready(function(){
	$( "h3" ).click(function() {
	$(this).next('p').toggle();
	  });



$('.glow').click(function(){
    $(this).next('.pabout').toggle();
    });


});



/* LightBox
================= */
//Capture the click event on a link to an image

// $(document).ready(function(){
// 	//Add overlay
// 	var $overlay = $('<div id="overlay"></div>');
// 	//Add image
// 	var $image = $("<img>");
// 	$overlay.append($image);
//
//
// 	$("body").append($overlay);
//
//
// 	$(".gallery a").click(function(event){
// 		event.preventDefault();
// 		var imageLocation = $(this).attr("href");
// 		$image.attr("src", imageLocation);
// 		$overlay.show();
// 	  });
// 	  $overlay.click(function(){
// 		  $(this).hide();
// 	  });
// });
//Show the overlay
//Update overlay with the image linked in the link
//Add the overlay
//An image
//When clicked on overlay, hide the overlay




$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

/* Add arrows when hover over h3 links
===================================== */



$(document).ready(function() {

//Define two arrows images, one points right and other down
var $arrowRight = $('<div id="arrowright"></div>');
var $arrowRightAr = $('<div id="arrowright-ar"></div>');
var $arrowRightBaghdadAr = $('<div id="arrowright-baghdad-ar"></div>');
var $arrowRightAboutOmer = $('<div id="arrow_about_omer"></div>');
var $arrowRightAboutErica = $('<div id="arrow_about_erica"></div>');
var $arrowRightAboutOmerAr= $('<div id="arrow_about_omer_ar"></div>');
var $arrowRightAboutEricaAr = $('<div id="arrow_about_erica_ar"></div>');
var $arrowRightShort = $('<div id="arrowright_short"></div>');
var $arrowRightBaghdad = $('<div id="arrowright_baghdad"></div>');


// Triger the hover function when move mouse to h3
// Show an arrow pointing to the right when hover
  	$(".arrow").hover(function(){
	$(this).prepend($arrowRight);}, function(){
	$arrowRight.remove();
	});

	// $(".arrow").click(function(){
	// $(this).prepend($arrowRight);
	// });





  	$(".arrow-ar").hover(function(){
	$(this).prepend($arrowRightAr);}, function(){
	$arrowRightAr.remove();
	});

  	$(".arrow-baghdad-ar").hover(function(){
	$(this).prepend($arrowRightBaghdadAr);}, function(){
	$arrowRightBaghdadAr.remove();
	});



  	$(".arrow_about_omer").hover(function(){
	$(this).prepend($arrowRightAboutOmer);}, function(){
	$arrowRightAboutOmer.remove();
	});

  	$(".arrow_about_erica").hover(function(){
	$(this).prepend($arrowRightAboutErica);}, function(){
	$arrowRightAboutErica.remove();
	});

  	$(".arrow_about_omer_ar").hover(function(){
	$(this).prepend($arrowRightAboutOmerAr);}, function(){
	$arrowRightAboutOmerAr.remove();
	});

  	$(".arrow_about_erica_ar").hover(function(){
	$(this).prepend($arrowRightAboutEricaAr);}, function(){
	$arrowRightAboutEricaAr.remove();
	});


  	$(".arrow_short").hover(function(){
	$(this).prepend($arrowRightShort);}, function(){
	$arrowRightShort.remove();
	});

  	$(".arrow_baghdad").hover(function(){
	$(this).prepend($arrowRightBaghdad);}, function(){
	$arrowRightBaghdad.remove();
	});









});










/*Menu drop list for mobile
============================= */


//Create a select and appent-to menu
// $(document).ready(function(){
// 	var $select = $("<select></select>");
// 	$("#nav").append($select);
//
// });


	//Cycle over menu links
	//Create an options
	//Options value of href
	//Option's text is the text of link
	//Append option to select
//Create button
//Bind click
  //go back to select location

//Modify CSS to hide links on small screens and show button instead
//Also hides select and button on large screens and show the links

