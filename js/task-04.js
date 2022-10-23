let counterValue = 0;
const value = document.querySelector("#value");
const btnIncrement = document.querySelector("[data-action='increment']");
const btnDecrement = document.querySelector("[data-action='decrement']");
console.log(btnIncrement);

btnIncrement.addEventListener("click", onClickButtonIncrement);
btnDecrement.addEventListener("click", onClickButtonDecrement);

function onClickButtonIncrement(event) {
  counterValue += 1;
  value.textContent = counterValue;
}

function onClickButtonDecrement(event) {
  counterValue -= 1;
  value.textContent = counterValue;
}
