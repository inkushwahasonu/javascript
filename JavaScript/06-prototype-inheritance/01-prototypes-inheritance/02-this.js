// The value of "this"
// No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.


// animal has methods
let animal = {
  walk(){
    if(!this.isSleeping){
      console.log(`I walk`);
    }
  },
  sleep(){
    this.isSleeping = true;
  }
};

let rabbit = {
  name : "White Rabbit",
  __proto__ : animal
};

// modifires rabbit.isSleeping
rabbit.sleep();

console.log(rabbit.isSleeping);  true
console.log(animal.isSleeping);  // undefined