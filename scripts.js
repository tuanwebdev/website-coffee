// Menu
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("is-mobile-menu-open");
});

menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("is-mobile-menu-open");
});


// Swiper
const swiper = new Swiper('.testimonials__wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: '.testimonials__pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.testimonials__button--next',
    prevEl: '.testimonials__button--prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});