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



// Initial Ratings

// Total Stars
const starsTotal = 5;

// get the rating number
let rate = document.querySelector(".number-rating").innerHTML;


// Get ratings
function getRatings(rate) {
    // Get percentage
    let starPercentage = (rate / starsTotal) * 100;

    // Round to nearest 10
    let starPercentageRounded = `${Math.round(starPercentage / 5) * 5}%`;

    // Set width of stars-inner to percentage
    document.querySelector('.stars-inner').style.width = starPercentageRounded;

    // Add number rating
    document.querySelector('.number-rating').innerHTML = rate;
  
}

getRatings(rate);


// Change page
document.querySelector(".sub-head-browse").addEventListener("click", ()=>{
  document.querySelectorAll(".sub-head-e").forEach((e)=>{
    e.classList.remove("underline");
    if(e.classList.contains("sub-head-browse")) e.classList.add("underline");
  });
  document.querySelectorAll(".body").forEach((e)=>{
      e.classList.add("no-display");
      if(e.classList.contains("browse")) e.classList.remove("no-display");
  });
})

document.querySelector(".button7-learnmore").addEventListener("click", ()=>{
  document.querySelectorAll(".sub-head-e").forEach((e)=>{
    e.classList.remove("underline");
    if(e.classList.contains("sub-head-browse")) e.classList.add("underline");
  });
  document.querySelectorAll(".body").forEach((e)=>{
      e.classList.add("no-display");
      if(e.classList.contains("browse")) e.classList.remove("no-display");
  });
  window.scrollTo(0, 0);  
})

document.querySelector(".sub-head-cart").addEventListener("click", ()=>{
  document.querySelectorAll(".sub-head-e").forEach((e)=>{
    e.classList.remove("underline");
    if(e.classList.contains("sub-head-cart")) e.classList.add("underline");
  });
  document.querySelectorAll(".body").forEach((e)=>{
      e.classList.add("no-display");
      if(e.classList.contains("cart")) e.classList.remove("no-display");
  })
})

document.querySelector(".sub-head-library").addEventListener("click", ()=>{
  document.querySelectorAll(".sub-head-e").forEach((e)=>{
    e.classList.remove("underline");
    if(e.classList.contains("sub-head-library")) e.classList.add("underline");
  });
  document.querySelectorAll(".body").forEach((e)=>{
      e.classList.add("no-display");
      if(e.classList.contains("library")) e.classList.remove("no-display");
  })
})

document.querySelector(".sub-head-discover").addEventListener("click", ()=>{
  document.querySelectorAll(".sub-head-e").forEach((e)=>{
    e.classList.remove("underline");
    if(e.classList.contains("sub-head-discover")) e.classList.add("underline");
  });
  document.querySelectorAll(".body").forEach((e)=>{
      e.classList.add("no-display");
      if(e.classList.contains("discover")) e.classList.remove("no-display");
  })
})


// Show game view
document.querySelectorAll(".game").forEach((a)=>{
  a.addEventListener("click", ()=>{
    document.querySelectorAll(".body").forEach((e)=>{
      e.classList.add("no-display");
      if(e.classList.contains("gv")) e.classList.remove("no-display");
    });
    window.scrollTo(0, 0);  
  })
});