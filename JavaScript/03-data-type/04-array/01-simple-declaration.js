

// array , simple declaration
/*** */ console.log("----------01--- simple declaration-----------------------------------------------------");

let fruits = ["Apple", "orange", "plum" ];
console.log(fruits[0]) ;     // Apple  
console.log(fruits[2]);     // pulm
console.log(fruits[1]);     // orange

console.log(fruits.length);  //3

fruits[3] = "mango";     // add one more element in array "fruits"
console.log(fruits[3]);    // mango
console.log(fruits.length);   // 4


console.log(fruits);





/*** */ console.log("--------02------- multiple objects and functions in an array------------------------------------------------");



let students=[ 'amit',{college: "csdfg"}, 'sumit', function (){console.log("hi")}];
console.log(students[1].college);    // csdfg
students[3]();                      // hi
console.log(students[2]);            // sumit


/**** */ console.log("--------------------------------------------------------------------------");

let details = [{name:'ankit', age : 00, id: 23415, address: 'india' }, {name:'swethd', age : 01, id: '4sadmk', address: 'holanamd' },{name:'stifunec', age : 02, id: 'dfds355', address: 'rusia' },{name:'john', age : 03, id: 'dsdf3234', address: 'Amerika' }];

console.log(details[0].name + " :- ");
console.log(details[0]);

console.log(details[1].name + " :- ");
console.log(details[1] );

console.log(details[2].name + " :- ");
console.log(details[2]);

console.log(details[3].name + " :- ");
console.log(details[3]);





/**** */ console.log("--------------------------------------------------------------------------");



let studentsDetails = [
  function(){name ='ankit'; age = 00; id = 23415; address = 'india' ;     console.log(`Name : ${name} , Age : ${age}, Id : ${id}, Address : ${address}`);}, 
  function(){name ='swethd'; age = 01; id = '4sadmk'; address = 'holanamd' ; console.log(`Name : ${name} , Age : ${age}, Id : ${id}, Address : ${address}`);},
  function(){name ='stifunec'; age  = 02; id = 'dfds355'; address = 'rusia'; console.log(`Name : ${name} , Age : ${age}, Id : ${id}, Address : ${address}`); },
  function(){name = 'john'; age = 03; id = 'dsdf3234'; address= 'Amerika' ; console.log(`Name : ${name} , Age : ${age}, Id : ${id}, Address : ${address}`);}
];

studentsDetails[0]();


studentsDetails[1]();

studentsDetails[2]();

studentsDetails[3]();
