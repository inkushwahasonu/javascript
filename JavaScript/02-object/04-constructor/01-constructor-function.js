// construction function

/**
 * they are named with capital letter first
 * they should be exicuted only with "new" operator
 *
 */
/**    */ console.log(
  "-----------01-------simple example of constructor----------------------------------"
);

function User(name) {
  // declaration of "User" constructor
  this.name = name;
  this.isAdmin = true;
}
let user = new User("jack"); // execute th "User" constructor by "new" operator

console.log(user.name); //  jack ( constructor calling)
console.log(user.isAdmin); // false;

/****** */ console.log(
  "---------------------------------------------------------------"
);

function User1(name) {
  this.name = "rohan";
  this.age = 23;
  this.college = "avs college";
}

let user1 = new User1();

//  console.log(user1);        // User1 { name: 'rohan', age: 23, college: 'avs college' }
console.log(user1.college);

// constructor mode test : new.target
// inside a function we can check whether it was called with new or without it useing a spacial new.targat property
/****** */ console.log(
  "-------------------------02 -------------new.targat----( constructor mode test )-------------------------------------"
);

function User2() {
  console.log(new.target);
}

User2(); // undefind       without "new"

new User2(); // function User{.......}       with "new"

/****** */ console.log("--------------------------------------");

function User3(name) {
  if (!new.target) {
    // if you run me without "new"
    return new User3(name); // iwill add "new" for you
  }
  this.name = name;
}
let mohan = User3("mohan"); // redirect call to new User
console.log(mohan.name); // mohan

// return from constructor
/****** */ console.log(
  "-------------------------03 -------------return from constructor------------------------------------"
);

function BigUser() {
  this.name = "sohan";
  return { name: "Godjilla" }; // returns this object
}
console.log(new BigUser().name); // Godjilla      got that object

/****** */ console.log("--------------------------------------");



function SmallUser () {
  this.name = " mohit";
  return ;                  // returns this
}
console.log(new SmallUser().name);    // mohit








//  method in constructor
/********* */ console.log("----------------04--------------method in constructor--------------------------------");

 function User4(name){
   this.name = name;
   this.sayHi = function(){
     console.log("my name is" + this.name);
   }
 };
 let ritik = new User4("ritik");
 ritik.sayHi();                       // My name is ritik



/**
 * john = {
 * name : "ritik",
 * sayHi : function() {}
 * };
 */