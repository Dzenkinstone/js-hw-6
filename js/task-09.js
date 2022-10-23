const button = document.querySelector(".change-color");
const body = document.querySelector("body");
button.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  return (body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
}
