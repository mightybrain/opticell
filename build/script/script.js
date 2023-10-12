window.addEventListener('DOMContentLoaded', () => {

  document.querySelector(".js-burger").addEventListener("click", () => {
    document.body.classList.toggle("burger-open");
  })


  class VideoController {
    constructor(elems) {
      this._currentPlaying = null;
      this._controllers = Array.from(elems).map(elem => {
        const btn = elem.querySelector(".js-play-video-btn");
        const frame = elem.querySelector(".js-video-frame");
        return { frame, btn };
      })
      this._init();
    }
  
    _init() {
      this._controllers.forEach(controller => {
        controller.frame.addEventListener("pause", () => {
          this.stopCurrentVideo();
        })
        controller.btn.addEventListener("click", () => {
          this._startVideo(controller);
        })
      })
    }
  
    _startVideo(controller) {
      this.stopCurrentVideo();
  
      controller.frame.play();
      controller.frame.classList.add("video__frame_started");
      controller.frame.setAttribute("controls", true);
      this._currentPlaying = controller;
    }
  
    stopCurrentVideo() {
      this._currentPlaying?.frame.pause();
      this._currentPlaying?.frame.load();
      this._currentPlaying?.frame.classList.remove("video__frame_started");
      this._currentPlaying?.frame.removeAttribute("controls");
      this._currentPlaying = null;
    }
  }
  
  if (document.querySelector(".js-video")) {
    VideoController.controller = new VideoController(document.querySelectorAll(".js-video"));
  }


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


  class PopoverController {
    constructor(btns) {
      this._currentOpened = null;
      this._controllers = Array.from(btns).map(btn => {
        const popoverName = btn.getAttribute("data-popover-target");
        const popover = document.querySelector(`[data-popover-name=${popoverName}]`)
        return { popover, btn };
      })
      this._closeBtns = document.querySelectorAll(".js-popover-close-btn");
      this._init();
    }
  
    _init() {
      window.addEventListener("click", event => {
        this._handleOuterClick(event.target);
      })
      this._closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          this.closeCurrentPopover();
        });
      })
      this._controllers.forEach(controller => {
        controller.btn.addEventListener("click", () => {
          this._openPopover(controller);
        })
      })
    }
  
    _openPopover(controller) {
      this.closeCurrentPopover();
  
      controller.popover.classList.add("popover-container_visible");
      this._currentOpened = controller;
    }
  
    _handleOuterClick(target) {
      if (!this._currentOpened) {
        return;
      }
      /* this._controllers.forEach(({ btn }) => {
  
      })
      if (!this._currentOpened.popover.contains(event.target)) {
        this.closeCurrentPopover();
      } */
    }
  
    closeCurrentPopover() {
      this._currentOpened?.popover.classList.remove("popover-container_visible");
      this._currentOpened = null;
    }
  }
  
  if (document.querySelector(".js-popover-btn")) {
    PopoverController.controller = new PopoverController(document.querySelectorAll(".js-popover-btn"));
  }


  if (document.querySelector(".js-select")) {
    document.querySelectorAll(".js-select").forEach(item => {
      NiceSelect.bind(item);
    })
  }
})