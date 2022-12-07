const sliderBig = new Swiper('.image-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    //? default type (bullet)
    // clickable: true,
    // // включить эффект горки буллетов
    // dynamicBullets: true,
    // // custom html for bullets
    // renderBullet: (index, className) => `<span class='${className}'>${index + 1}</span>`
    //? fraction type
    type: 'fraction',
    renderFraction: (currentClass, totalClass) => {
      return `Photo <span class='${currentClass}'></span> of <span class='${totalClass}'></span>`
    }
    //? progressbar type
    // type: 'progressbar',
  },

  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  // },

  simulateTouch: true, // default. false to disable swipe in pc
  touchRatio: 1, // default. the more is touchRatio, the more is swipe sensitivity. 0 to disable swipe in all devices. negative values possible
  touchAngle: 45, // default. the angle that swipe should be to work
  grabCursor: true,
  slideToClickedSlide: true, // change slide on click of another slide

  keyboard: {
    enabled: true, // false is default. Should explicitly add keyboard: true,
    onlyInViewport: true, // default. slider keyboard events invoke only when slider is fully visible
  },

  // mousewheel: {
  //   sensitivity: 1,
  //   eventsTarget: '.image-slider', //? if we have many sliders with .image-slider inside, all of them will be scrolled at once so for this option use unique classes or id
  // },

  // autoHeight: true, // if slidesPerColumn is not 1, should be false
  slidesPerView: 3, // can be float ot int, or 'auto', if auto, slide width should also be specified to auto in css
  // grid: {
  //   rows: 2,
  // },
  watchOverflow: true, // default. if all slides can be placed in container, slider will not be initialized 
  spaceBetween: -10,
  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 1, // starts from 0, default 0
  loop: true, // if true, cannot switch slide by click on next/prev button until transition ends
  // freeMode: { // doesnt work well with slideToClickedSlide
  //   enabled: true,
  //   // momentumBounceRatio: 0,
  //   momentumBounce: false, // set to false do fix loop+freeMode behavior when user swipes fast and slider scrolls very fast 
  //   //                        and slides are loading late
  //   momentumRatio: 1, // also fixes loop+freeMode behavior but a bit. Better in combo with momentumBounce: false
  // },
  // rewind: true, // should not be used with loop
  autoplay: { // data-swiper-autoplay to slide to set different autoplay duration
    delay: 2500, // default 3000
    // stopOnLastSlide: true, // works if slider is not looped
    disableOnInteraction: true,
    // pauseOnMouseEnter: true,
  },
  speed: 500, // default 300
  // effect: 'fade', // only with slidesPerView: 1,
  // fadeEffect: {
  //   crossFade: true,
  // }

  // effect: 'flip', // only with slidesPerView: 1,
  // flipEffect: {
  //   crossFade: true,
  //   limitRotation: true
  // },

  // effect: 'cube', // only with slidesPerView: 1,
  // cubeEffect: {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94
  // },

  effect: 'coverflow',
  coverflowEffect: {
    slideShadows: true,
    rotate: 20,
    stretch: -30,
  },

  breakpoints: { // mobile-first. some properties cannot be changed in breakpoints
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  },

  preloadImages: false,

  lazy: {
    loadOnTransitionStart: true, // if true, images will start load when transition to slide starts, if false - when ends. default false
    loadPrevNext: true, // if true, images will be loaded in current, prev and next slides
    loadPrevNextAmount: 3,
  },
  watchSlidesProgress: true, // should be with watchSlidesVisibility. true only if slidesPerView > 1
  watchSlidesVisibility: true, // adds class to visible slides true only if slidesPerView > 1
}); 

const sliderSmall = new Swiper({
  el: '.image-mini-slider',
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  longSwipesRatio: 0.4,
  watchOverflow: true,
  slidesPerGroup: 1,
  loop: true, // if true, cannot switch slide until transition ends
  slideToClickedSlide: true, // change slide on click of another slide
  centeredSlides: true,
  speed: 500, // default 300
  spaceBetween: 100,
}) 

// sliderBig.controller.control = sliderSmall;
// sliderSmall.controller.control = sliderBig;

// some useful props:
// 
// swiper.animating - true if swiper is in transition
// 
// swiper.progressCurrent progress of wrapper translate (from 0 to 1)

// swiper.translate - Current value of wrapper translate

// swiper.destroy(deleteInstance, cleanStyles) - Destroy slider instance and detach all events listeners

// swiper.setTranslate(translate) - Set custom css3 transform's translate value for swiper wrapper

sliderBig.on('autoplayStop', () => {
  document.addEventListener('click', (e) => {
    if(e.target.closest('.swiper-container')) return;
    sliderBig.autoplay.start()
  })
})
