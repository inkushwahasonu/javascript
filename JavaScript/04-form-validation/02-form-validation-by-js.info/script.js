
function signup(){
  addEventListener("submit", (event) =>{
    event.preventDefault() 
    login();
  });
   
}


function login(){
  let username = document.getElementById('username');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let password = document.getElementById('password');
  let cpassword = document.getElementById('cpassword');
  let error = document.getElementById('error');
  email.value.trim();
  phone.value.trim();
  password.value.trim();
  cpassword.value.trim();
  let usernameval = username.value;


  if (usernameval === ""){
    username.classList.add("invalid");
    error.innerHTML = 'Please enter a correct email.'
    return false;
  }
  if(usernameval.length <= 2){
    
  }





  // email.classList.add("invalid");
  // phone.classList.add("invalid");
  // password.classList.add("invalid");
  // cpassword.classList.add("invalid");


  
};



 





{/* <body class="main page">
  <script>
    // add a class
    document.body.classList.add('article');

    alert(document.body.className); // main page article
  </script>
</body> */}



