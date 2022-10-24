const input = document.querySelector("#validation-input");
console.log(input);

input.addEventListener("blur", OnInputExit);

function OnInputExit(event) {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
}
