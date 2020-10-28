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
    usernameError();
    usernameErrorMsg.innerHTML = "please fill user-name, it can't be empty!";
    return false;
  } 
  else {
    username.classList.remove("invalid");
    usernameErrorIcon.classList.remove("errorIcon");
    usernameSuccessIcon.classList.add("successIcon");
    usernameErrorMsg.innerHTML = "";

  }

  // ---------- email validation---------------------


  // ---------- phone validation---------------------

  

  // ---------- password validation---------------------


  
  

  // ---------- confirm password validation---------------------


  const usernameError = function() {
    username.classList.add("invalid");
    usernameErrorIcon.classList.add("errorIcon");
  }
  
  
}


