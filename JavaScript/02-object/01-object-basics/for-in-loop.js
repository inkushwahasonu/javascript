//   for....in  loop

/*** */ console.log("----------------------for( key in object){}---------------------");


let user1 = {
  name : "john",
  age : 30,
  isAdmin : false,
  collection : 43,
};
 for( let show in user1){
   console.log(show);          // name age isAdmin
 }
 /******/console.log("................----------.........");

 for( let show in user1){
  console.log(user1[show]);    // john 30 false 43
}
 /******/console.log("......--------------------..................");
for ( let show in user1){
  console.log(show);           
  console.log(user1[show]);  
}






/*** */ console.log("----------------intiger properties in order---for( key in object){}---------------");

let codes = {
  "45" : "India",
  "34"  : "japan",
  "56" : "noman",
  //....,
  "23" : "USA",
  "32" : "Rusia",
};

for (let order in codes){
  console.log(order);        //// 23 32 34 45 56    display number-properties in an order (increment order)
}

 /******/console.log("...----------....integer property and it's value in an order.....----------..");

  for ( let order in codes){
    console.log(order);
    console.log(codes[order]);
  }



//use '+' sign to fix the order of integer property of an object
// to fix th issue with the phone codes, we can "cheat" by making the codes non-integer. Adding a plus "+" sign before each code is enough.
/*** */ console.log("----------------use '+' sign to fix the order of integer property of an object---------------");

let mohan = {
  "+47" : "Gegmany",
  "+43" : "shrilanka",
  "+23" : "India",
  "+32" : "dslr",
  // ....,
  "+40" : "Uks",
}
for ( let fixIntegerForPhone in mohan){
  console.log(fixIntegerForPhone);          ///  47 43 23 32 40
}

/**** */ console.log("-----------------------------------");
for (let fixIntegerForPhone in mohan){
  console.log(fixIntegerForPhone);
  console.log(mohan[fixIntegerForPhone]);
}

/**** */ console.log("-----------------------------------");








/*** */ console.log("------------create object's property out side of object-------------------");

let user2 ={
  name : "swan",
  surname : "shankar"
};

user2.age = 34;   // add a extra property oou of object
user2.college = "sbg univ"; //add another extra property oou of object

for(let extraProperty in user2){
  console.log(extraProperty);       // name surname age
}















  // Math.trunc is a built-in function that removes the decimal part
  /****** */ console.log("--- Math.trunc is a built-in function that removes the decimal part---");
  console.log( String(Math.trunc(Number("49"))));    // 49
  console.log( String(Math.trunc(Number("+49"))));    // 49
  console.log( String(Math.trunc(Number("1.2"))));    // 1 , print integer property



