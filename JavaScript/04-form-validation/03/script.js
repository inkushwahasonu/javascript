function signup(event) {
  event.preventDefault();

  // fetch ID with DOM methods
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const cpassword = document.getElementById("cpassword");

  const usernameErrorMsg = document.getElementById("usernameErrorMsg");
  const emailErrorMsg = document.getElementById("emailErrorMsg");
  const phoneErrorMsg = document.getElementById("phoneErrorMsg");
  const passwordErrorMsg = document.getElementById("passwordErrorMsg");
  const cpasswordErrorMsg = document.getElementById("cpasswordErrorMsg");

  const usernameErrorIcon = document.getElementById("usernameErrorIcon");
  const emailErrorIcon = document.getElementById("emailErrorIcon");
  const phoneErrorIcon = document.getElementById("phoneErrorIcon");
  const passwordErrorIcon = document.getElementById("passwordErrorIcon");
  const cpasswordErrorIcon = document.getElementById("cpasswordErrorIcon");

  const usernameSuccessIcon = document.getElementById("usernameSuccessIcon");
  const emailSuccessIcon = document.getElementById("emailSuccessIcon");
  const phoneSuccessIcon = document.getElementById("phoneSuccessIcon");
  const passwordSuccessIcon = document.getElementById("passwordSuccessIcon");
  const cpasswordSuccessIcon = document.getElementById("cpasswordSuccessIcon");
  // ---------- username validation---------------------
  if (username.value === "") {
    username.classList.add("invalid");
    usernameErrorIcon.classList.add("errorIcon");
    usernameErrorMsg.classList.remove("instruction");
    usernameErrorMsg.classList.add("error");
    usernameErrorMsg.innerHTML = "please fill user-name, it can't be empty!";
    return false;
  } else {
    username.classList.remove("invalid");
    usernameErrorIcon.classList.remove("errorIcon");
    usernameSuccessIcon.classList.add("successIcon");
    usernameErrorMsg.innerHTML = "";
  }

  // ---------- email validation---------------------
  const emailRegExp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,20})(.[a-z]{2,8})?$/;
  if (email.value === "") {
    email.classList.add("invalid");
    emailErrorIcon.classList.add("errorIcon");
    emailErrorMsg.classList.remove("instruction");
    emailErrorMsg.classList.add("error");
    emailErrorMsg.innerHTML = "please fill email field, it can't be empty !";
    return false;
  }else if(emailRegExp.test(email.value) ) {
    email.classList.remove("invalid");
    emailErrorIcon.classList.remove("errorIcon");
    emailSuccessIcon.classList.add("successIcon");
    emailErrorMsg.innerHTML = "";
    
  }
  else {
    
    email.classList.add("invalid");
    emailErrorIcon.classList.add("errorIcon");
    emailErrorMsg.classList.remove("instruction");
    emailErrorMsg.classList.add("error");
    emailErrorMsg.innerHTML = "invalid email!";
    return false;
  }



  // ---------- phone validation---------------------
  const phoneRegExp =/^[6-9]\d{9}$/;
  if (phone.value === "") {
    phone.classList.add("invalid");
    phoneErrorIcon.classList.add("errorIcon");
    phoneErrorMsg.classList.remove("instruction");
    phoneErrorMsg.classList.add("error");
    phoneErrorMsg.innerHTML ="please fill confirm password field, it can't be empty !";
    return false;
  } else if(phoneRegExp.test(phone.value)){
   phone.classList.remove("invalid");
   phoneErrorIcon.classList.remove("errorIcon");
   phoneSuccessIcon.classList.add("successIcon");
   phoneErrorMsg.innerHTML = "";
  }
  else{
    phone.classList.add("invalid");
    phoneErrorIcon.classList.add("errorIcon");
    phoneErrorMsg.classList.remove("instruction");
    phoneErrorMsg.classList.add("error");
    phoneErrorMsg.innerHTML = "invalid contact number";
  }

  // ---------- password validation---------------------

  if (password.value === "") {
    password.classList.add("invalid");
    passwordErrorIcon.classList.add("errorIcon");
    passwordErrorMsg.classList.remove("instruction");
    passwordErrorMsg.classList.add("error");
    passwordErrorMsg.innerHTML =
      "please fill password field, it can't be empty !";
    return false;
  } else {
    password.classList.remove("invalid");
    passwordErrorIcon.classList.remove("errorIcon");
    passwordSuccessIcon.classList.add("successIcon");
    passwordErrorMsg.innerHTML = "";
  }

  // ---------- confirm password validation---------------------

  if (cpassword.value === "") {
    cpassword.classList.add("invalid");
    cpasswordErrorIcon.classList.add("errorIcon");
    cpasswordErrorMsg.classList.remove("instruction");
    cpasswordErrorMsg.classList.add("error");
    cpasswordErrorMsg.innerHTML =
      "please fill password field, it can't be empty !";
  } else if (password.value === cpassword.value) {
    cpassword.classList.remove("invalid");
    cpasswordErrorIcon.classList.remove("errorIcon");
    cpasswordSuccessIcon.classList.add("successIcon");
    cpasswordErrorMsg.innerHTML = "";
  } else {
    cpassword.classList.add("invalid");
    cpasswordErrorIcon.classList.add("errorIcon");
    cpasswordErrorMsg.classList.remove("instruction");
    cpasswordErrorMsg.classList.add("error");
    cpasswordErrorMsg.innerHTML = "password invalid!";
  }
}




// ^[6-9]\d{9}$

// ^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,20})(.[a-z]{2,8})?$