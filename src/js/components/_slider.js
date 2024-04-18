import Swiper, { Navigation, Pagination } from 'swiper';

const swiperPortfolio = new Swiper('.portfolio-slider', {
  slidesPerView: 3,
  spaceBetween: 20,

  modules: [Navigation, Pagination],
  slidesPerView: 1,
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  draggable: true,
  grabCursor: true,
  breakpoints: {
    320: {
    },
    768: {
    },
    991: {
    },
  },
});

const swiperBlog = new Swiper('.blog-slider', {
  slidesPerView: 3,
  spaceBetween: 20,

  modules: [Navigation, Pagination],
  slidesPerView: 1,
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  draggable: true,
  grabCursor: true,
  breakpoints: {
    320: {
    },
    768: {
    },
    991: {
    },
  },
});
