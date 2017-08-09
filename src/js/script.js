$(document).ready(function(){
  
  $("a").click(function(){
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 900);
    return false;
    });

	$( ".button-cross" ).hide();
	$( ".hamburger-menu" ).hide();
	$( ".button-hamburger" ).click(function() {
	$( ".hamburger-menu" ).slideToggle( "slow", function() {
	$( ".button-hamburger" ).hide();
	$( ".button-cross" ).show();
	});
	});

	$( ".button-cross" ).click(function() {
	$( ".hamburger-menu" ).slideToggle( "slow", function() {
	$( ".button-cross" ).hide();
	$( ".button-hamburger" ).show();
	});
	});


});
