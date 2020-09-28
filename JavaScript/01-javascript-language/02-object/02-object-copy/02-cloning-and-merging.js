// cloning and merging
/**** */ console.log(
  "-----------------------04-------------  cloning and merging-------------------"
);

let user1 = {
  name: "sohan",
  age: 34,
};

let newUser = {}; //new empty object

/******/ console.log("------------------------------------------------");
for (let detail in user1) {
  newUser[detail] = user1[detail]; // clone user1 in newUser

  //console.log(detail);       // name age
  console.log(newUser[detail]); // sohan 34
  console.log(user1[detail]); //sohan 34
}
/******/ console.log("------------------------------------------------");
console.log(user1.name); // sohan
console.log(newUser.name); // sohan
/******/ console.log("---------------------------------------------------");

newUser.name = "Romy";
newUser.age = 21;

console.log(user1.name); //sohan
console.log(user1.age); // 34
console.log(newUser.name); // romy
console.log(newUser.age); // 21
