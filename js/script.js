var writeUs = document.querySelector(".write-us");
var popupFeedback = document.querySelector(".modal-feedback");
var modalClose = document.querySelectorAll(".modal-close");
var allModal = document.querySelectorAll(".modal");

writeUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log("Клик");
	popupFeedback.classList.add("modal-show");
});

modalClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	allModal.classList.remove("modal-show");
});
