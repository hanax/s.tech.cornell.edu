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
    $("#publications .card").animate({
      "height": $("#publications .card").get(0).scrollHeight
    }, 500, () => {$(".pub-overlay").fadeOut("fast");});
  });

  $("#desktop img").css("height", parseInt($("#desktop img").css("width"))/3*2);
  $(".pub-info").css("min-height", parseInt($("#desktop img").css("width"))/3*2);

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
