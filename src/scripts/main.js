import 'normalize-css';
import '../styles/index.styl';

$(() => {
  const windowHeight = $(window).height();
  $('.slide').css("min-height", windowHeight);

  $(window).scroll(() => {
    if ($("body").scrollTop() > windowHeight / 2) {
      $(".header").addClass("stick");
    } else {
      $(".header").removeClass("stick");
      $(".menu").fadeOut("fast");
      $(".menu-dropdown").fadeOut("fast");
    }
  });

  $(".menu").click(() => {
    $(".menu-dropdown").fadeToggle("fast");
  });

  $("body").click((e) => {
    const t = $(e.target);
    if (!t.closest(".menu").length && !t.closest(".menu-dropdown").length) {
      console.log('yo')
      $(".menu-dropdown").fadeOut("fast");
    }
  });

  // Smooth Scrolling
  $('a[href*=#]:not([href=#])').click(() => {
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
