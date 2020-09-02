// this in two objects   (“this” keyword is not bound)


/***** */ console.log("---------------01 ------------- this in two objects   (“this” is not bound)--------------");



// use the same function for multiple objects
/***** */ console.log("------------------ use the same function for multiple objects--------------");

let user1 = {name : "mukesh"};
let user2 = {name : "shankar"};
let user3 = { name : "amit"};

function usersDetails(){               // create a function for multiple objects
  console.log(this.name);
  
}

 
// use the same function in multiple objects
user1.f = usersDetails;  
user2.f = usersDetails;
user3.f = usersDetails;

// these calls have different " this"
// "this" inside the function is the object " before the dot"
user1.f();   // mukesh  (this == user1) 
user2['f']();  // shankar  (this == user2)  in dot or square bracket , any one access the method --- doesn't metter
user3.f();      // 







// another example
/***** */ console.log("----------------02 -----------another example--------------");


let user4 = {name :"Ramesh", college : "syd univ", age : 23, address : "reanchi"};
let user5 = {address : " telangana", name : "subham", age : 45, college : " drm college"};
let user6 = {registration : 2523657, roll : 20};
let user7 = { roll : 40, registration : 463424};

function details1(){
console.log(this.name);
console.log(this.age);
console.log(this.college);
console.log(this.address);
}
function details2(){
  console.log(this.roll);
  console.log(this.registration);
}

user4.f = details1;
user5.f = details1;
user6.f = details2;
user7.f = details2;

/*** */ 
console.log("----------------show details of user4 --");
user4.f();                                             // show details of user4 


/*** */ 
console.log("----------------show details of user5 --");
user5['f']();                                          //show details of user5


/*** */ 
console.log("----------------show details of user6--");         
user6.f();                                             // show details of user6


/*** */ 
console.log("----------------show details of user7 --");
user7.f();                                             // show details of user7

