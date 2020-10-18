const findButton = document.querySelector(".find-button");
const findPopup = document.querySelector(".modal");
const dateIn = findPopup.querySelector("#date-in-id");
const dateOut = findPopup.querySelector("#date-out-id");
const findForm = findPopup.querySelector(".find-form");

findButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  findPopup.classList.toggle("modal-show");
  dateIn.focus();
});

findForm.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value){
    evt.preventDefault();
    findPopup.classList.add("modal-error");
    findPopup.offsetWidth = findPopup.offsetWidth;
    findPopup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (findPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      findPopup.classList.remove("modal-show");
      findPopup.classList.remove("modal-error");
    }
  }
});
