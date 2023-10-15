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
      controller.frame.addEventListener("play", () => {
        this._setCurrentVideo(controller);
      })
      controller.btn.addEventListener("click", () => {
        this._startVideo(controller);
      })
    })
  }

  _setCurrentVideo(controller) {
    if (this._currentPlaying && this._currentPlaying !== controller) {
      this.stopCurrentVideo();
    }
    this._currentPlaying = controller;
  }

  _startVideo(controller) {
    controller.frame.play();
    controller.frame.classList.add("video__frame_started");
    controller.frame.setAttribute("controls", true);
  }

  stopCurrentVideo() {
    this._currentPlaying?.frame.pause();
    this._currentPlaying = null;
  }
}

if (document.querySelector(".js-video")) {
  VideoController.controller = new VideoController(document.querySelectorAll(".js-video"));
}