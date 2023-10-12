if (document.querySelector(".js-select")) {
  document.querySelectorAll(".js-select").forEach(item => {
    NiceSelect.bind(item);
  })
}