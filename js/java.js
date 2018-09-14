
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

  $( ".toggleContact" ).click(function() {
    var showimg = $(this).attr("data-pic");
    $('#'+showimg).toggle();
  });

});



$(function(){
  $(".buttoncolorclicked").click(function(){
    if(this){
      $(this).css('background-color','#5E0B17');
    } 
    });
});