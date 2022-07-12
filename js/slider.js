new Swiper ('.benefits-swiper', {
  slidesPerView: 6,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-benefits-next',
    prevEl: '.swiper-benefits-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 14,
    },
    578: {
      slidesPerView: 3.2,
      spaceBetween: 14,
    },
    820: { //Ok
      slidesPerView: 4.1,
      spaceBetween: 20,
    },
    1024: {
      // slidesPerView: 4.2,
      spaceBetween: 20,
    },
    1080: { //убрать падинга у кнопки корзины
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  }
});


new Swiper ('.brands-swiper', {
  slidesPerView: 6,
  spaceBetween: 30,
  // autoHeight: false,
  observer: true,
  observeParents: true,
  observeSlidesChildren:true,
  // slidesPerColumn: 2,
  // grid: {
  //   rows: 2,
  // },




  navigation: {
    nextEl: '.swiper-brands-next',
    prevEl: '.swiper-brands-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2.04,
      spaceBetween: 14,
      grid: {
        rows: 2,
      },
    },
    578: {
      slidesPerView: 3.2,
      spaceBetween: 14,
      grid: {
        rows: 2,
      },
    },
    820: { //Ok
      slidesPerView: 4.1,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
    1024: {
      // slidesPerView: 4.2,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
    1080: { //убрать падинга у кнопки корзины
      slidesPerView: 5,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },

}
});


new Swiper ('.trends-swiper', {
  slidesPerView: 6,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  observeSlidesChildren:true,
  slideToClickedSlide: false,

  navigation: {
    nextEl: '.swiper-trends-next',
    prevEl: '.swiper-trends-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2.04,
      spaceBetween: 14,
    },
    578: {
      slidesPerView: 3.2,
      spaceBetween: 14,
    },
    820: { //Ok
      slidesPerView: 4.1,
      spaceBetween: 20,
    },
    1024: {
      // slidesPerView: 4.2,
      spaceBetween: 20,
    },
    1080: { //убрать падинга у кнопки корзины
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  }
});


new Swiper ('.products-swiper', {
  slidesPerView: 6,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  observeSlidesChildren: true,
  // slideToClickedSlide: false,

  navigation: {
    nextEl: '.swiper-products-next',
    prevEl: '.swiper-products-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2.04,
      spaceBetween: 14,
    },
    578: {
      slidesPerView: 3.2,
      spaceBetween: 14,
    },
    820: { //Ok
      slidesPerView: 4.1,
      spaceBetween: 20,
    },
    1024: {
      // slidesPerView: 4.2,
      spaceBetween: 20,
    },
    1080: { //убрать падинга у кнопки корзины
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  }
});


new Swiper ('.category-swiper', {
  slidesPerView: 6,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-category-next',
    prevEl: '.swiper-category-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2.04,
      spaceBetween: 14,
    },
    578: {
      slidesPerView: 3.2,
      spaceBetween: 14,
    },
    820: { //Ok
      slidesPerView: 4.1,
      spaceBetween: 20,
    },
    1024: {
      // slidesPerView: 4.2,
      spaceBetween: 20,
    },
    1080: { //убрать падинга у кнопки корзины
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  }
});



