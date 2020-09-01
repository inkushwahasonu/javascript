// nested cloning
/******/ console.log(
  "---------------08------------------- nested cloning--------------------"
);

/******/ console.log("---------------------------------------------------");
let user = {
  name: "ankit",
  size : {
    height : 134,
    width : 30
  }
};
console.log(user.size.width);    // 30
console.log(user.width);         // undefined
console.log(user.size);          //  { height: 134, width: 30 }


/******/ console.log("---------------------------------------------------");



let user1 = {
  name : " rohan",
  size : {
    height : 182,
    width : 40
  }
};

let detail = Object.assign({}, user1);

console.log(detail.size == user1.size) ;  //  true----- check clonning is true of false
console.log(user1.name);                // rohan
console.log(detail.name);               // rohan
console.log(detail.size.height);        // 182

//



/******/ console.log("---------------------------------------------------");
