function signup(event) {
  event.preventDefault();
  validate();

  username.addEventListener("blur", inputBlur, true);

 
  function inputBlur() {
    username.style.backgroundColor = " green";
  }
}

const username = document.getElementById("username");
// let email = document.getElementById('email');
// let phone = document.getElementById('phone');
// let password = document.getElementById('password');
// let cpassword = document.getElementById('cpassword');
// let error = document.getElementById('error');
function validate() {
  // email.value.trim();
  // phone.value.trim();
  // password.value.trim();
  // cpassword.value.trim();
  // let usernameval = username.value;

  if (username.value === "") {
    username.classList.add("invalid");
    error.innerHTML = "Please enter a correct username.";
    username.addEventListener("focus", inputFocus, true);
    inputFocus();
    return false;
  }
}

{
  /* <body class="main page">
  <script>
    // add a class
    document.body.classList.add('article');

    alert(document.body.className); // main page article
  </script>
</body> */
}


function inputFocus() {
  username.style.backgroundColor = "";
}