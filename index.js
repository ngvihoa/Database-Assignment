var swiper = new Swiper(".body-inner-1", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteracrtion: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
      },
    },
  });
 
var swiper2 = new Swiper(".body-inner-2", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: false,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 3,
      },
      950: {
          slidesPerView: 5,
      },
  },
});

var swiper3 = new Swiper(".body-inner-6", {
  slidesPerView: 1,
  allowTouchMove: false,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var swiper4 = new Swiper(".body-inner-8", {
  slidesPerView: 1,
  allowTouchMove: false,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

