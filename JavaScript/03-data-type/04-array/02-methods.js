// methods pop/PushManager, shift/unshift


// pop method
console.log("-----------------------01-----------------pop--- methods-------------------------------------");
// extract/remove the  last element to the array and return it


let fruits = ["apple", "orange", "pear"];
 console.log(fruits.pop());   // remove "pear"  and print it
/**
 * fruits.pop();                // remove "pear"     can use this function 
*/
 console.log(fruits);           // apple , orange






// push method
 console.log("-----------------------02-----------------push--- methods-------------------------------------");
//  Append/Insert the element to the end of the array 

 let fruits2 =["Apple", "Orange"];
console.log(fruits2);                  // 'Apple', 'Orange' 
fruits2.push("Pears") ;       
 console.log(fruits2);        //'Apple', 'Orange', 'Pears'






// shift method
 console.log("-----------------------03-----------------shift--- methods-------------------------------------");
// extract/remove the first element from the array

let fruits3 = ["Apple", "orange", "Pears"];
console.log(fruits3);                      // 'Apple', 'Orange', 'Pears'
// fruits3.shift();       /** can use*/ 
console.log(fruits3.shift() + ` is Removved`);
console.log(fruits3);                          // 'orange', 'Pears' 




// unshift methods
console.log("-----------------------04-----------------unshift--- methods-------------------------------------");
// Add/insert element to the begining of the array 

let  fruits4 = ["Orange", "Pear"];
console.log(fruits4);                //console.log(fruits4);
fruits4.unshift('Apple');
console.log(fruits4);               //'Apple', 'Orange', 'Pear'




// use of all functions in one array
console.log("-----------------------05-----------------unshift--- methods-------------------------------------");


let fruits5 =[ "Apple", "Orange", "Pear"];
console.log(fruits5);
fruits5.pop();             console.log(fruits5);   
fruits5.shift();           console.log(fruits5);
fruits5.push("Pear");      console.log(fruits5);
fruits5.unshift("Apple");  console.log(fruits5);


