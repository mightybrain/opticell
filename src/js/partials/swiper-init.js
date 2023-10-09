if(document.querySelector(".js-media-swiper")){
  new Swiper(".js-media-swiper", {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 24,
    navigation: {
      nextEl: ".js-media-swiper-next-btn",
      prevEl: ".js-media-swiper-prev-btn",
    },
  })
}
