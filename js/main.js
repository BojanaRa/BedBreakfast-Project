/* HAMBURGER MENU */
$('.menu-toggle').click(function() { /* Hamburger menu ima klasu .menu-toggle, klikom na nju izvrsava se sledeca funkcija */
    $(this).toggleClass('opened'); /* Ova klasa .menu-toggle da dobije dodatnu klasu open */
    $('.unstyle-list').toggleClass('opening'); /* .unlstyle list klasa da dobije dodatnu klasu opening */
    $('.nav').toggleClass('navigation'); /* .nav klasa da dobije dodatnu klasu navigation */
    if ($("nav").hasClass("navigation")) { /* ako klasa nav ima klasu navigation */
      $('body').addClass('disable-scroll') /* onda dodaj u body klasu disable-scroll */
    } else { /* Ako nema */
      $('body').removeClass('disable-scroll') /* Obrisi iz body klasu disable-scroll */
    }
  });
  
$('ul li a').click(function() { /* link u navigaciji iz liste ima funkciju kada se klikne na link */
    $('.nav').removeClass('navigation') /* Obrisi klasu .navigation koja se nalazi pored klase .nav */
    $('.menu-toggle').removeClass('opened'); /* Obrisi klasu open koja se nalazi pored klase .menu-toggle */
    $('.unstyle-list').removeClass('opening'); /* obrisi openin klasu koja se nalazi pored klase .unstyle-list */
    $('body').removeClass('disable-scroll') /* Iz body obrisi klasu .disable-scroll */
});

/* Section Gallery - Slick Slider */
$('.slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false
});

/* Modal booking */
$('.reservation').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.modal').addClass('open');
});
$('.modal .close').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.modal').removeClass('open');
});
var safari   = navigator.userAgent.indexOf("Safari") > -1;
var chrome   = navigator.userAgent.indexOf('Chrome') > -1;
if ((chrome) && (safari)) {
safari = false;
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
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
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}