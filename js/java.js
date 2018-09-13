
// $(document).ready(function(){

// $('#about').waypoint(function(direction) {
//     console.log('Reached 1');
//     $("#link-about").css("color", "#ffffff");
//     $("#link-education").css("color", "black");
//     $("#link-skills").css("color", "black");
//     $("#link-awards").css("color", "black");
//     $("#link-portfolio").css("color", "black");
// });
// $('#education').waypoint(function(direction) {
//     console.log('Reached 2');
//     $("#link-about").css("color","black");
//     $("#link-education").css("color", "#ffffff");
//     $("#link-skills").css("color", "black");
//     $("#link-awards").css("color", "black");
//     $("#link-portfolio").css("color", "black");
// });
// $('#skills').waypoint(function(direction) {
//     console.log('Reached 3');
//     $("#link-about").css("color","black");
//     $("#link-education").css("color", "black");
//     $("#link-skills").css("color", "#ffffff");
//     $("#link-awards").css("color", "black");
//     $("#link-portfolio").css("color", "black");

// });
// $('#awards').waypoint(function(direction) {
//     console.log('Reached 4');
//     $("#link-about").css("color","black");
//     $("#link-education").css("color", "black");
//     $("#link-skills").css("color", "black");
//     $("#link-awards").css("color", "#ffffff");
//     $("#link-portfolio").css("color", "black");
// });
// $('#projects').waypoint(function(direction) {
//     console.log('Reached 5');
//     $("#link-about").css("color","black");
//     $("#link-education").css("color", "black");
//     $("#link-skills").css("color", "black");
//     $("#link-awards").css("color", "black");
//     $("#link-projects").css("color", "#ffffff");

// });
// $(document).ready(function () {
//   //your code here


(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#leftnav'
  });

})(jQuery); // End of use strict




$(function(){

$( "#toggleContact" ).click(function() {
  $( ".google" ).toggle( "slow" );
});

});

$(function(){

$( "#toggleContact1" ).click(function() {
  $( ".ieee" ).toggle( "slow" );
});

});

$(function(){

$( "#toggleContact2" ).click(function() {
  $( ".chairball" ).toggle( "slow" );
});

});

$(function(){

$( "#toggleContact3" ).click(function() {
  $( ".csr" ).toggle( "slow" );
});

});


$(function(){

$( "#toggleContact4" ).click(function() {
  $( ".techslam" ).toggle( "slow" );
});

});



$(".button1").click(function(){

        $(".ifclicked1").css('background-color', '#008CBA');
    });   
$(".button2").click(function(){

        $(".ifclicked2").css('background-color', '#008CBA');
    });   
$(".button3").click(function(){

        $(".ifclicked3").css('background-color', '#008CBA');
    });   
$(".button4").click(function(){

        $(".ifclicked4").css('background-color', '#008CBA');
    });   
$(".button5").click(function(){

        $(".ifclicked5").css('background-color', '#008CBA');
    });   