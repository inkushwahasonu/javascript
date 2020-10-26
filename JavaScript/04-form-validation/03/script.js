function signup() {
  addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
  });
}

const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

function validate() {
  if (username.value === "") {
    username.classList.add("invalid");
    error.innerHTML = "Please enter a correct email.";
    return false;
  }
}


// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onfocus_eventdelegation

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onblur