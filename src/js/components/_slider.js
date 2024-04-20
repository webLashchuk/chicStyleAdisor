import Swiper, { Navigation, Pagination } from 'swiper';

const swiperPortfolio = new Swiper('.portfolio-slider', {
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

const swiperStyle = new Swiper('.style-slider', {
  slidesPerView: 3.5,
  spaceBetween: 32,
  initialSlide: 1,

  modules: [Navigation, Pagination],
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

const swiperGalleryImg = new Swiper('.gallery-slider', {
  slidesPerView: 2,
  spaceBetween: 64,
  initialSlide: 1,
  slidesPerGroup: 2,

  modules: [Navigation, Pagination],
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

