 /////// this in methods
 /***** */ console.log("-------------------01---------'this' in methods-----------------------------");

 let user = {
   name : "rohan",
   age : 34,
   sayHi(){
console.log(this.name); 
console.log(`your age is ${this.age}`)   ;
   }
 };
 user.sayHi();     // rohan

  /***** */ console.log("------------------------------------------------");

  let user1 = {
    name : "someshwar",
    age : 56,
    sayHi2(){
      console.log(this.name);      // exicution success
      // console.log(user1.name);     // error
    }
    
  };

  let admin = user1;
  user1 = null;             // overwriting to make things abious
  admin.sayHi2();              //someshwar    ( work 'this.name')