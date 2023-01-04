const submit = document.querySelector(".submit");
const errorText = document.querySelector(".error-text");
const form = document.querySelector("form");
const input = document.querySelector("input");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const inputValue = input.value.trim();
  console.log(inputValue);

  if (isEmail(inputValue)) {
    // errorText.style.display = "none";
    // errorIcon.style.display = "none";
    form.classList.remove("error");
    form.classList.remove("error");
  } else {
    // errorText.style.display = "block";
    // errorIcon.style.display = "block";
    form.classList.add("error");
    form.classList.add("error");
  }
}

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}
