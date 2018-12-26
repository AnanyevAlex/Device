var writeUs = document.querySelector(".write-us");
var popupFeedback = document.querySelector(".modal-feedback");
var feedbackClose = document.querySelector(".modal-feedback-close");
var imgMap = document.querySelector(".device-map");
var popupMap = document.querySelector("modal-map");
var mapClose = document.querySelector(".modal-map-close");


writeUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupFeedback.classList.add("modal-show");
});

feedbackClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupFeedback.classList.remove("modal-show");
});

imgMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupMap.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	popupFeedback.classList.remove("modal-show");
});