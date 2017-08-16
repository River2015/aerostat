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


// обратный отсчет

// var remain_bv   = 2678400
// ;
// function parseTime_bv(timestamp){
//     if (timestamp < 0) timestamp = 0;
 
//     var day = Math.floor( (timestamp/60/60) / 24);
//     var hour = Math.floor(timestamp/60/60);
//     var mins = Math.floor((timestamp - hour*60*60)/60);
//     var secs = Math.floor(timestamp - hour*60*60 - mins*60); 
//     var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );
 
//     $('span.afss_day_bv').text(day);
//     $('span.afss_hours_bv').text(left_hour);
 
//     if(String(mins).length > 1)
//         $('span.afss_mins_bv').text(mins);
//     else
//         $('span.afss_mins_bv').text("0" + mins);
//     if(String(secs).length > 1)
//         $('span.afss_secs_bv').text(secs);
//     else
//         $('span.afss_secs_bv').text("0" + secs);
     
// }
 
// $(document).ready(function(){
//     setInterval(function(){
//         remain_bv = remain_bv - 1;
//         parseTime_bv(remain_bv);
//         if(remain_bv <= 0){
//             alert('Hello');
//         }
//     }, 1000);
// });

 

$("#cd").countdown("2018/01/01", function(event) { $(this).text( event.strftime('%D дней %H часов %M минут %S секунд') );});

});
