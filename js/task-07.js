const input = document.querySelector("#font-size-control");
console.dir(input);
const span = document.querySelector("#text");
console.log(span);
input.addEventListener("input", onInputChange);
function onInputChange(event) {
  console.log(input.value);
  span.style.fontSize = `${input.value}px`;
}
