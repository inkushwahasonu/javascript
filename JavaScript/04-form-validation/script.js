//--fatch elements by DOM (document object model)

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

// add events

form.addEventListener('submit', (event) => {
  // to remove ? in url after submition of form
  event.preventDefault(); // removed ? from url (and form not submited)
  validate();
});

// more email validation

const isEmail = (emailVal) => {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

// define the validate function
const validate = () => {
  const usernameVal = username.value.trim(); // remove space befor first charector and after last charactor
  const emailVal = email.value.trim(); // remove space befor first charector and after last charactor
  const phoneVal = phone.value.trime(); // remove space befor first charector and after last charactor
  const passwordVal = password.value.trim(); // remove space befor first charector and after last charactor
  const cpasswordVal = cpassword.value.trim(); // remove space befor first charector and after last charactor

  // validate username

  if (usernameVal === "") {
    setErrorMsg(usernameVal, "User name can not be blank");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(usernameVal, "username min 3 char");
  } else {
    setSuccessMsg(usernameVal);
  }

  // validate email

  if (emailVal === "") {
    setErrorMsg(emailVal, "Email cal not be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(emailVal, "not a valid email");
  } else {
    setSuccessMsg(emailVal)
  }
};

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = errormsgs;
}
