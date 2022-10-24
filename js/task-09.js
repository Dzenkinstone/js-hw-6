const button = document.querySelector(".change-color");
const body = document.querySelector("body");
button.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  const randomColor = getRandomHexColor();
  return (body.style.backgroundColor = randomColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
