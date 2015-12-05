import 'normalize-css';
import '../styles/index.styl';

$(() => {

  $('video').on('ended', () => {
    console.log('end');
    this.load();
    this.play();
  });

  $('.slide')
    .height($(window).height())
    .width($(window).width());

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
