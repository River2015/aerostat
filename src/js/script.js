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

	$('.ananas').slick({
   slidesToShow: 4,
   infinite: true,
   autoplay: true,
   autoplaySpeed: 2000,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }   
   ]
  });



});
