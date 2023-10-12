if(document.querySelector(".js-media-swiper")){
  new Swiper(".js-media-swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 8,
    breakpoints: {
      661: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      1121: {
        slidesPerView: 2,
        spaceBetween: 24,
      }
    },
    on: {
      slideChange: function() {
        VideoController.controller.stopCurrentVideo();
      },
    },
    navigation: {
      nextEl: ".js-media-swiper-next-btn",
      prevEl: ".js-media-swiper-prev-btn",
    },
  })
}
