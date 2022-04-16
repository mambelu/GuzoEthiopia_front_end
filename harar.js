const buttons = document.querySelectorAll("[data-slideView-button]" )

buttons.forEach(button => {
  button.addEventListener("click", () => {
  const offset = button.dataset.activeSlideButton === "next" ? 1 : -1
  const slides= button.closest("[data-slideView]").querySelector("[data-slides]")

  const activeSlide = slides.querySelector("[data-active]")
  let newIndex = [...slides.children].indexOf(activeSlide) + offset
  if (newIndex < 0 ) newIndex = slides.children.length - 1
  if (newIndex >= slides.children.length) newIndex = 0
  
  slides.children[newIndex].dataset.active = true
  delete activeSlide.dataset.active

})
  
});

const buttonShow = document.querySelector(".showMore");
const buttonHide  = document.querySelector(".showLess");
const paragraphOne= document.querySelector(".paragraphOne");
const paragraphTwo= document.querySelector(".paragraphTwo");

const showMore = () => {
  paragraphTwo.style.display= "block";
  buttonShow.style.display = "none";
}
const showLess = () => {
  paragraphTwo.style.display= "none";
  buttonShow.style.display = "block";
  buttonShow.style.backgroundColor= "rgba(174, 200, 224, 0.582)";

}


buttonShow.addEventListener("click",showMore);
buttonHide.addEventListener("click", showLess);
