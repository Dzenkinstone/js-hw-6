const form = document.querySelector(".login-form");

form.addEventListener("submit", onButtonClick);

function onButtonClick(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  if (email.value.length === 0 || password.value.length === 0) {
    return alert("Всі поля повинні бути заповнені");
  }
  console.log(
    `${email.name}: ${email.value}, ${password.name}: ${password.value}`
  );
  event.currentTarget.reset();
}
