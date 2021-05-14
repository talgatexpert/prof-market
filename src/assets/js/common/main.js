$(document).ready(function () {
  let $preloader = $("#page-preloader");
  $preloader.fadeOut(1000);

  /* $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 30) {
      $(".header").addClass(".header__active");
    } else {
      $(".header").removeClass(".header__active");
    }
  }); */

  /* AOS.init({
    once: true,
    anchorPlacement: "bottom-bottom",
    duration: 800,
  });

  onElementHeightChange(document.body, function () {
    AOS.refresh();
  }); */

  /* $("a.go").click(function (e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 800);
  }); */

  var homePageSlider = new Swiper(".home-page-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: false,


      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: false

      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },  

      },

      992: {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

      },
    }
  });

});
