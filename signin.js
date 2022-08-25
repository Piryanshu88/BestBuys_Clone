///////// show and hide password ////////////

// show
document.querySelector(".show-img").addEventListener("click", function () {
  document.querySelector(".show-img").classList.toggle("hiding");
  document.querySelector(".hide-img").classList.toggle("hiding");
  document.querySelector("#password").setAttribute("type", "text");

  document.querySelector(".show-password > label").innerText = "Hide Password";
});

// hide
document.querySelector(".hide-img").addEventListener("click", function () {
  document.querySelector(".show-img").classList.toggle("hiding");
  document.querySelector(".hide-img").classList.toggle("hiding");
  document.querySelector("#password").setAttribute("type", "password");

  document.querySelector(".show-password > label").innerText = "Show Password";
});

/////////// sign in ///////////////

// this is dom
const email = document.querySelector("#email");
const password = document.querySelector("#password");

let data = JSON.parse(localStorage.getItem("data")) || [];

// click on sign up button
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  signin();
});

function signin() {
  let em = email.value;
  let pa = password.value;

  function clearFields() {
    email.value = "";
    password.value = "";
  }

  let checkData = false;

  data.forEach(element => {
    if (element.email === em && element.password === pa) checkData = true;
  });

  if (checkData === false) document.querySelector(".wrong-password").style.display = "block";
  else {
    window.location.href = "index.html";
    clearFields();
  }
}
