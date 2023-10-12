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