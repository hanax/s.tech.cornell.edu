import 'normalize-css';
import '../styles/index.styl';

$(() => {
  const windowHeight = $(window).height();
  const windowWidth = $(window).width();

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

  $(".pub-overlay").click(() => {
    if (parseInt($("#publications .card").css("height")) != 620) {
      $("#publications .card").animate({
        "height": 620
      }, 500, () => {$(".pub-overlay span").css("transform", "scaleY(1)");});
    } else {
      $("#publications .card").animate({
        "height": $("#publications .card").get(0).scrollHeight
      }, 500, () => {$(".pub-overlay span").css("transform", "scaleY(-1)");});      
    }

  });

  $("#desktop img").css("height", parseInt($("#desktop img").css("width"))/3*2);
  $(".pub-info").css("min-height", parseInt($("#desktop img").css("width"))/3*2);
  $(".pub-video-overlay").css("line-height", parseInt($("#desktop img").css("width"))/3*2-4+"px");

  // Smooth Scrolling
  $('a[href*=#]:not([href=#])').click(function(){
    if (window.location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && window.location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70
        }, 700);
        $(".menu-dropdown").fadeOut("fast");
        return false;
      }
    }
  });


  // Veno box
  /* default settings */
  $('.venobox').venobox(); 

  /* custom settings */
  $('.venobox_custom').venobox({
      framewidth: '820px',        // default: ''
      frameheight: '620px',       // default: ''
      border: '0',             // default: '0'
      bgcolor: '#fff',         // default: '#fff'
      titleattr: 'video',    // default: 'title'
      numeratio: true,            // default: false
      infinigall: true            // default: false
  });

  /* auto-open #firstlink on page load */
  $("#firstlink").venobox().trigger('click');


  // Initialize Map
  var initializeMap = () => {
    var cornellTechLatLng = {lat: 40.740918, lng: -74.0043697};
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: cornellTechLatLng,
      zoom: 13,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP]
      },
      disableDefaultUI: true,
      scaleControl: true,
      zoomControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
      position: cornellTechLatLng,
      map: map,
      title: 'Cornell Tech'
    });
  }

   google.maps.event.addDomListener(window, 'load', initializeMap);
});
