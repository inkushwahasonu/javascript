// transform an array

// map 
/** */ console.log("------------------01----------arr.map  method----------------------------");

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);   // 5, 7, 6


// arr.sort function
/** */ console.log("------------------02----------arr.sort  method----------------------------");

let arr = [1, 2, 15];
// the method reorders the content of arr
arr.sort();
console.log(arr);

/*** */ console.log("-----------------------------------------------------------");
function compareNumeric(a, b){
  if(a>b)return 1 ;     // if the first value is  greater than the second
  if(a == b) return 0;  // if values are equal
  if(a<b) return -1;    // if the first value is less than the second
}

let arr2 = [1, 2, 15];
arr2.sort(compareNumeric);
console.log(arr2);          // 1, 2, 15



/*** */ console.log("-----------------------------------------------------------");
[1, -2, 15, 2, 0, 8].sort(function(a,b){
  console.log(a + "<>" + b);
});


/*** */ console.log("-----------------------------------------------------------");
let arr3 = [1, 2, 15];
arr3.sort(function(c, d){return c - d});
console.log(arr3);

/*** */ console.log("-----------------------------------------------------------");

let countries = ['Osterreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a,b) => a > b ? 1 : -1));    // [ 'Andorra', 'Osterreich', 'Vietnam' ]
console.log(countries.sort((a, b) => a.localeCompare(b)));     // [ 'Andorra', 'Osterreich', 'Vietnam' ]




// reverse method
/** */ console.log("------------------03----------arr.reverse()  method----------------------------");


let arr5 = [1, 2, 3, 4, 5];
arr5.reverse();
console.log(arr5);



/** */ console.log("------------------04---------- split and join----------------------------");


let names = 'Bilbo, Gandalf, Nazgul';
let arr6 = names.split(', ');
for(let name of arr6){
  console.log(`A message to ${name}.`);
  /**
  A message to Bilbo.
  A message to Gandalf.
  A message to Nazgul.
  */
}



/*** */ console.log("-----------------------------------------------------------");

let arr7 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(", ",2);
console.log(arr7);     // [ 'Bilbo', 'Gandalf' ]


/*** */ console.log("-----------------------------------------------------------");

let str = "test";
console.log(str.split(''));  // t,e,s,t


/*** */ console.log("-----------------------------------------------------------");
let arr8 = ['Bilbo','Gandalf', 'NAzgul'];
let str2 = arr8.join(';');      // glue the array into a string using ;
console.log(str2);         // Bilbo;Gandalf;NAzgul



/** */ console.log("------------------05---------- reduce.reduceRight----------------------------");

let arr9 = [1,2,3,4,5];
let result2 = arr9.reduce((sum, current) => sum + current, 0);
console.log(result2);      // 15


/** */ console.log("------------------06---------- Aeeay.isArray() method----------------------------");

console.log(typeof{});   // object
console.log(typeof[]);   // object

console.log(Array.isArray({}));      // false
console.log(Array.isArray([]));    // true




/** */ console.log("------------------07---------- thisArg---------------------------");

let army = {
  minAge : 18,
  maxAge : 27,
  canJoin(user){
    return user.age >= this.minAge && user. age < this.maxAge;
  }
};

let users3 = [
  {age : 16},
  {age : 20},
  {age : 23},
  {age : 30}
];

let soldiers = users3.filter(army.canJoin, army);
console.log(soldiers.length);              // 2
console.log(soldiers[0].age);              // 20
console.log(soldiers[1].age);              // 23 