if (document.querySelector(".product__packages-select")) {
  document.querySelectorAll(".product__packages-select select").forEach(item => {
    NiceSelect.bind(item);
  })
}