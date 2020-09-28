
// F.prototype     (function-name.prototype)

// Remember, new objects can be created with a cinstructor function, like new F().
// if F.prototype is an object, then the new operator usees it to set [[Prototype]] for the new object.



let animal = {
  eats : true 
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;         // F.prototype

let rabbit = new Rabbit("White Rabbit");  // rabbit.__proto__ == animal

console.log(rabbit.eats); // true
console.log(rabbit.name);   // White Rabbit



/*** */ console.log("--------------------------------------------------------------------");

function Rabbit2 (){ }
  // by default :
  // Rabbit. prototype = {constructor: Rabbit}

  console.log(Rabbit2.prototype.constructor == Rabbit2 );  // true



  /*** */ console.log("--------------------------------------------------------------------");
function Rabbit3(){}
// by default :
// Rabbit.prototype = {constructor : Rabbit}

let rabbit3 = new Rabbit3();   // inherits from {constructor : Rabbit} ( create constructor)

console.log(rabbit3.constructor == Rabbit3);   // true (from prototype)




/*** */ console.log("--------------------------------------------------------------------");

function Rabbit4(name){
  this.name = name;
  console.log(name);
}

let rabbit4 = new Rabbit4 ("White Rabbit");     // create constructor

let rabbit5 = new rabbit4.constructor("Black Rabbit");





/*** */ console.log("--------------------------------------------------------------------");

function Rabbit6 (){}
Rabbit6.prototype = {
  jumps : true 
};

let rabbit6 = new Rabbit6();
console.log(rabbit6.constructor === Rabbit6);   // false