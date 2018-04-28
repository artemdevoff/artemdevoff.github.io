 var wrapper = document.querySelector(".items__wrapper"),
   buttonLeft = document.querySelector(".items__button--left"),
   buttonRight = document.querySelector(".items__button--right"),
   left = 0,

   socialBtn = document.querySelector(".social__btn"),
   social = document.querySelector(".social--desc"),
   share = document.querySelector(".stars__share");

 buttonRight.addEventListener("click", function () {
   left = left - 100;
   if (left < -500) {
     left = 0;
   }
   wrapper.style.left = left + "%"
 }, false);

 buttonLeft.addEventListener("click", function () {
   if (left == 0) {
     left = left - 500;
     wrapper.style.left = left + "%"
   } else {
     left = left + 100;
     wrapper.style.left = left + "%"
   }
 }, false);


 share.addEventListener("mouseover", function () {
   social.style.opacity = "1";
 }, false);

 socialBtn.addEventListener("click", function () {

   social.style.opacity = "0";

 }, false)