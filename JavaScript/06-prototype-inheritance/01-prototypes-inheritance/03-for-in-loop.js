// for...in loop


let animal = {
  eats : true
};
let rabbit = {
  jumps : true,
  __proto__ : animal 
};

// object.keys only returns own keys
console.log(Object.keys(rabbit)); // jumps

// for...in loop over both own and inherited keys
for(let prop in rabbit) console.log(prop);   // jumps, eats 





/*** */ console.log("----------------------------------------------------");
let animal2 = {
  eat : true 
};

let rabbit2 = {
  jumps : true,
  __proto__ : animal 
};

for(let prop2 in rabbit2) {
  let isOwn = rabbit.hasOwnProperty(prop2);
  
  if (isOwn){
    console.log(`Our : ${prop2}`);  // Our : jumps
  }else{
    console.log(`Inherited : ${prop2}`);   // Inherited : eats
  }
}