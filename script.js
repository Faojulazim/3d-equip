const contactBtn = document.querySelector("#contactBtn");
const hiddenContent = document.querySelector("#hiddenContent");
const rotateArrow = document.querySelector("#rotateArrow");

contactBtn.addEventListener("click", (e) => {
  hiddenContent.classList.toggle("translate-y-[-200%]");
  rotateArrow.classList.toggle("rotate-180");
});

document.body.addEventListener("click", (e) => {
  if (!e.target.closest("#contactDiv")) {
    hiddenContent.classList.add("translate-y-[-200%]");
    rotateArrow.classList.remove("rotate-180");
  }
});
