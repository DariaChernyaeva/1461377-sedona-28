var map = document.querySelector(".background-color-card");

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show")
});