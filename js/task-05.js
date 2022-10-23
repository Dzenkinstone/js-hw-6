const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
console.log(input);
console.log(span);

input.addEventListener("input", onInputText);

function onInputText(event) {
  if (event.currentTarget.value === "") {
    span.textContent = "Anonymus";
  } else span.textContent = event.currentTarget.value;
}
