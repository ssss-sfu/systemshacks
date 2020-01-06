$('a[href*="#"]').click(function (event) { // Navigation Scroll Animation 

  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    let target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    if (target.length) {
      event.preventDefault();
      $('html, #body-main').animate({
        scrollTop: target.offset().top
      }, 1000); // html body jQuery .animate 
    } // if target.length 

  } // if Location Check 

}); // Navigation Scroll Animation 