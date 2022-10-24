const div = document.querySelector("#boxes");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let value = 0;

input.addEventListener("blur", onInputChange);

function onInputChange(event) {
  value = event.currentTarget.value;
}

buttonCreate.addEventListener("click", createBoxes);

function createBoxes(amount) {
  amount = value;
  for (let i = 0; i < amount; i += 1) {
    const markup = document.createElement("div");
    div.append(markup);
    markup.style.backgroundColor = getRandomHexColor();
    markup.style.width = `${30 + (i - 1) * 10}px`;
    markup.style.height = `${30 + (i - 1) * 10}px`;
  }
}

buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  div.innerHTML = "";
}
