

//focus signup input
function signUp() {
        $('html, body').animate({
            scrollTop: $('body').offset().top
        }, 2000, function() {
            $('#mce-EMAIL').focus();
        });
    }


// footer counter method

var n = localStorage.getItem('visitCounter');
if (n === null) {
    n = 0;
}
n++;
localStorage.setItem("visitCounter", n);
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
        var n = localStorage.getItem('visitCounter');


      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum+(n*2));

      //alert('finished');
    }

  });

});





 // set copyright year date
 var currentYear = (new Date()).getFullYear(); {
   $('.year').text(currentYear);
 }

 // Select all links with hashes
 $('a[href*="#"]')
   // Remove links that don't actually link to anything
   .not('[href="#"]')
   .not('[href="#0"]')
   .click(function(event) {
     // On-page links
     if (
       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname
     ) {
       // Figure out element to scroll to
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       // Does a scroll target exist?
       if (target.length) {
         // Only prevent default if animation is actually gonna happen
         event.preventDefault();
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 1000, function() {
           // Callback after animation
           // Must change focus!
           var $target = $(target);
           $target.focus();
           if ($target.is(":focus")) { // Checking if the target was focused
             return false;
           } else {
             $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
             $target.focus(); // Set focus again
           }
         });
       }
     }
   });

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
