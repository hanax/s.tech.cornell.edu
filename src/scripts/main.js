import 'normalize-css';
import '../styles/index.styl';

$(() => {
  $('.slide')
    .css("min-height", $(window).height());

  $(window).scroll(() => {
    if ($("body").scrollTop() > 200) {
      $(".header").addClass("stick");
    } else {
      $(".header").removeClass("stick");
    }
  });

  // Smooth Scrolling
  $(() => {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 700);
          return false;
        }
      }
    });
  });
});
