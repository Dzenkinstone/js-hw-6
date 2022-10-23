const input = document.querySelector("#validation-input");
console.log(input);

input.addEventListener("blur", OnInputExit);

function OnInputExit(event) {
  if (input.value.length < input.dataset.length) {
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
