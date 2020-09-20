// Getters and setters

let user = {
  name : "John",
  surname : "Smith",

  get fullName(){
    return `${this.name} ${this.surname}`;
  }
};

console.log(user.fullName);      // John Smith



/*** */ console.log("----------------------------------------------------------");

/*
let user2 = {
  get fullName(){
    return `...`;
  }
};



user.fullName = "Test"; // Error (property has only a getters)

*/


let user2 = {
  name : "Sohan",
  surname : "Kumar",
  
  get fullName(){
    return `${this.name} ${this.surname}`;
  },

  set fullName(value){
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName is executed with the given value.
user2.fullName = "Alice Cooper";

console.log(user2.name);    // Alice
console.log(user2.surname);   // Cooper

