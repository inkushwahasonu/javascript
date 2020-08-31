// type of declaration of  objects

/**
 * let user = new object();       //  "object constructor"  syntex
 * let user = {} ;             // "object literal"  syntex
 */


//  Literals and properties

/**  *** ***********/ console.log("-----------create literal object & it's properties-----------------");
 let user1 = {                    // an object created
  name : "John",               // by key " name" store value "John"
  age : 30                      // by key "age" store value 30
  };
 console.log(user1);         // { name: 'John', age: 30 }
console.log(user1.name);
console.log(user1.age);



 /**  *** ***********/ console.log("-------------delete any property in a literal object.-------------");

 let user2 = {                    // an object created
  name : "John",               // by key " name" store value "John"
  age : 30 ,                     // by key "age" store value 30
  };
  delete user2.age;
  console.log(user2);       // { name: 'John' }
console.log(user2.name);    // John
console.log(user2.age);      // undefined


   /**  *** ***********/ console.log("-------------multiword property in a literal object.-------------");


   let user3 = {           //   create a literal object
    name : "john",
    age : 30, 
    " likes bird " : true         // multiword property name must be quoted      
  };

  console.log(user3);            //  { name: 'john', age: 30, ' likes bird ': true }
  console.log(user3.name);      // john
  console.log(user3.age);
  user3.name = "pete";    //change name of user3
  console.log(user3.name);     // pete



   /**  *** ***********/ console.log("--------can change constant value of property in a literal object.--------");

   const user4 = {
     name : "John"
   };

   user4.name = "pete";

   console.log(user4.name);
