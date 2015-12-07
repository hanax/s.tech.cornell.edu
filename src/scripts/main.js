import 'normalize-css';
import '../styles/index.styl';

$(() => {
  const windowHeight = $(window).height();
  const windowWidth = $(window).width();
  // $('.slide').css("min-height", windowHeight);

  $(window).scroll(() => {
    if ($("body").scrollTop() > windowHeight / 2) {
      $(".header-stick .title").fadeIn("slow");
    } else {
      $(".menu-dropdown").fadeOut("fast");
      $(".header-stick .title").fadeOut("slow");
    }
  });

  $(".menu").click(() => {
    $(".menu-dropdown").fadeToggle("fast");
  });

  $("body").click((e) => {
    const t = $(e.target);
    if (!t.closest(".menu").length && !t.closest(".menu-dropdown").length) {
      $(".menu-dropdown").fadeOut("fast");
    }
  });

  // Smooth Scrolling
  $('a[href*=#]:not([href=#])').click(function(){
    if (window.location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && window.location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        $(".menu-dropdown").fadeOut("fast");
        return false;
      }
    }
  });
});
