

var formbutton = document.querySelector(".search-of-hotel");
var form = document.querySelector(".form-flex");

formbutton.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("modal-show");
});

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem(".form-flex");
} catch (err) {
  isStorageSupport = false;
}


