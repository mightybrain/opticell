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

    controller.popover.classList.add("popover_visible");
    this._currentOpened = controller;
  }

  _handleOuterClick(target) {
    if (!this._currentOpened) {
      return;
    }
    const { popover, btn } = this._currentOpened;
    if (!popover.contains(target) && !btn.contains(target)) {
      this.closeCurrentPopover();
    }
  }

  closeCurrentPopover() {
    this._currentOpened?.popover.classList.remove("popover_visible");
    this._currentOpened = null;
  }
}

if (document.querySelector(".js-popover-btn")) {
  PopoverController.controller = new PopoverController(document.querySelectorAll(".js-popover-btn"));
}