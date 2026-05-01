// Menu
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks =  document.querySelectorAll(".navbar__link");

if (menuOpenButton) {
  menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("is-mobile-menu-open");
  });
}

if (menuCloseButton) {
  menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("is-mobile-menu-open");
  });
}

navLinks.forEach(link =>{
  link.addEventListener('click', ()=>menuOpenButton.click())
})

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