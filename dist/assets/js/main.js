$(document).ready((function(){$("#page-preloader").fadeOut(1e3);new Swiper(".home-page-slider",{slidesPerView:4,spaceBetween:30,loop:!0,breakpoints:{320:{slidesPerView:2,spaceBetween:20,navigation:!1},480:{slidesPerView:2,spaceBetween:30,navigation:!1},768:{slidesPerView:3,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},992:{slidesPerView:4,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}})}));