/////////// password validation ///////////
function passwordValidation(pass) {
  let alph = false;
  let icon = false;
  let len = false;

  for (let i = 0; i < pass.length; i++) {
    if (pass[i].toLowerCase() !== pass[i].toUpperCase()) {
      alph = true;
      break;
    }
  }

  for (let i = 0; i < pass.length; i++) {
    if (
      pass[i] === "!" ||
      pass[i] === "@" ||
      pass[i] === "#" ||
      pass[i] === "$" ||
      pass[i] === "%" ||
      pass[i] === "^" ||
      pass[i] === "&" ||
      pass[i] === "*"
    ) {
      icon = true;
      break;
    }
  }

  if (pass.length >= 5) len = true;

  if (alph === true && icon === true && len === true) return true;
  else return false;
}

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
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  signup();
});

function signup() {
  let fn = firstName.value;
  let ln = lastName.value;
  let em = email.value;
  let pa = password.value;
  let cp = confirmPassword.value;
  let mn = mobileNumber.value;

  let detail = new signupConst(fn, ln, em, pa, mn);

  function clearFields() {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    mobileNumber.value = "";
  }

  let checkConfirm = false;
  let checkValidity = passwordValidation(pa);
  let checkData = true;

  if (pa === cp) checkConfirm = true;

  data.forEach(element => {
    if (element.email === em) checkData = false;
  });

  if (checkData === false) alert("You Already have an Account!");
  else if (checkValidity === false) document.querySelector(".valid").style.display = "block";
  else if (checkConfirm === false) document.querySelector(".confirm").style.display = "block";
  else {
    data.push(detail);
    localStorage.setItem("data", JSON.stringify(data));
    clearFields();
    alert("Account Created Successfully!");
  }
}