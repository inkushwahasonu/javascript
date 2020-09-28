// default value with "get" get trap
// most common traps  are for reading/writing properties

let numbers = [0, 1, 2];
numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // default value
    }
  }
});

console.log(numbers[1]);
console.log(numbers[123]);

/**** */ console.log("---------------------------------");


let dictionary = {
  'Hello': 'Hola',
  'Bye' : 'Adios'
};
console.log(dictionary['Hello']);    // Hola
console.log(dictionary['Welcome']);   // undefined




/**** */ console.log("----------------------------------");

let dictionary2 = {
  'Hello' : 'Hola',
  'Bye' : 'Adiós'
};

dictionary2 = new Proxy(dictionary, {
  get(target, phrase){    // intercept reading a property from directory
    if (phrase in target) {    // if we have it in the direction
      return target[phrase]; // return the translation
    } else {
      // otherwise, return the non-transleted phrase
      return phrase;
    }
  }
});


// look up arbitrary phrase in the directory!
// at worst, they're not translated.
console.log(dictionary2['Hello']);   // Hola
console.log(dictionary2['Welcome to Proxy']);      // Welcome to Proxy (no translation)
