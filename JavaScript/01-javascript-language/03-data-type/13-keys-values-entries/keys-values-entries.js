/**
   Object.keys, values, entries
For plain objects, the following methods are available:

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.

 */

/**
    Object.keys(user) = ["name", "age"]
    Object.values(user) = ["John", 30]
    Object.entries(user) = [ ["name","John"], ["age",30] ]

  */

  let user = {
    name : "John",
    age : 30
  };

  // loop over values
  for(let value of Object.values(user)){
    console.log(value);   // john   30
  }
  

  for(let value of Object.keys(user)){
    console.log(value);   // name    age
  }

  for(let value of Object.entries(user)){
    console.log(value);   //  [ 'name', 'John' ]     [ 'age', 30 ]
  }



