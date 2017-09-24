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

	$('#ananas').slick({
   slidesToShow: 4,
   infinite: true,
   autoplay: true,
   autoplaySpeed: 2000,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        
                    //centerMode: false,
                    //centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        arrows: true,
      }
    }


    // {
    //   breakpoint: 768,
    //   settings: {
    //     arrows: true,
    //     centerMode: false,
    //     centerPadding: '0px',
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // }   
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



  

$("#route").change(function () {
  $("#persons").change(function () {
  
var persons = $("#persons :selected").val(); 
        var persons = parseFloat(persons);
  var route = $("#route :selected").val(); 
        var route = parseFloat(route);
 result = persons * route; 
  
        $("#result").val(result); 
  $('#result').html(result);

                         
      });
    });

if (window.matchMedia("(min-width: 768px)").matches) {                
//   $(".payment-menu__link").click(function(){
//     $(".description").eq($(".payment-menu__link").index(this)).addClass("active").siblings().removeClass("active");
    
   
//   $(".payment-menu__link").eq($(this).index(this)).addClass("payment-menu__link--active").siblings().removeClass("payment-menu__link--active");

// });

  $('ul.payment-menu__list').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.payment__container').find('div.description').removeClass('active').eq($(this).index()).addClass('active');
  });
}                



  function accordion() {
    function openItem() {
      if ($(this).hasClass('outer-active')) {
        $(this).removeClass('outer-active');
      } else {
      $('.outer').removeClass('outer-active');
      $(this).addClass ('outer-active');
        }
    
    } 
    $('.outer').on('click', openItem); 
  }
    accordion();

$('#briliant').slick({
   slidesToShow: 2,
   infinite: true,
   autoplay: true,
   autoplaySpeed: 2500,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
                //prevArrow: '<div class="slick-prevv"></div>',

               // nextArrow: '<div class="slick-nextv"></div>'
                //centerMode: false,
                //centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        //autoplay: false
      }
    }
                      // {
                      //   breakpoint: 768,
                      //   settings: {
                      //     arrows: true,
                      //     centerMode: false,
                      //     centerPadding: '0px',
                      //     slidesToShow: 1,
                      //     slidesToScroll: 1
                      //   }
                      // }   
   ]
      });






});

