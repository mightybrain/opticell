window.addEventListener('DOMContentLoaded', () => {

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


  if (document.querySelector(".product__packages-select")) {
    document.querySelectorAll(".product__packages-select select").forEach(item => {
      NiceSelect.bind(item);
    })
  }
})