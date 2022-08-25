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


/////////// create account ///////////////

// this is dom
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const mobileNumber = document.querySelector("#mobile-number");

class signupConst {
  constructor(firstName, lastName, email, password, mobileNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.mobileNumber = mobileNumber;
  }
}

let data = JSON.parse(localStorage.getItem("data")) || [];

// click on sign up button
document.querySelector("form").addEventListener("submit", function() {
  signup();
});

function signup() {
  let fn = firstName.value;
  let ln = lastName.value;
  let em = email.value;
  let pa = password.value;
  let cp = confirmPassword.value;
  let mn = mobileNumber.value;

  let detail = new signupConst(fn, ln, em, pa, cp, mn);
}