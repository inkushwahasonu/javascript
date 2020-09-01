
//  object.assign
  /**** */ console.log("-----------------------01-------------  object.assign-------------------")

  let student ={ name : "soma" ,age : 24};
  let user4 ={ collage : "rvm univ"};
  let user5 = { address : " delhi"};
  Object.assign(student, user4, user5);  // assign properties of user4 &user5 in student 

  console.log(student.address);   // delhi
  console.log(user5.name);         // undefined
  03-object-assign
  for(let detail in student){
    // console.log(detail);    //  name : "soma" ,age : 24 collage : "rvm univ" address : " delhi"
    console.log( student[detail]);   // soma  24  rvm univ  delhi
  }

 /******/ console.log("-------------------------------------------");


 // change property in  object.assign
   /******/console.log("-------------------------02--------------------change property in  object.assign------------------");

let student2 = { name : "rohan"};
console.log(student2.name);                   // rohan
Object.assign(student2 , {name : "Rocky"});    //change property 
console.log(student2.name);                      // Rocky





/******/ console.log("-------------------------------------------");
let sunil = { name : "sonu"};
 let amit = { age : 23};
 Object.assign(sunil , amit.name = " Roshan" );

 console.log(sunil.name);   // sonu
 console.log(sunil.age);     // undefined
 console.log(amit.name);      // Roshan




// object.assign to replace for..in loop for simple cloning
 /******/ console.log("------------------------0------------------- object.assign to replace for..in loop for simple cloning--------------------");
  let telif = {name : "sukant", age : 30};
  let firsen = Object.assign({}, telif);
 console.log(firsen);             //name : " sukant", age : 30
  console.log(telif[firsen]);     // undefined
  console.log(telif.name);   // sukant
  console.log(telif.age);    // 30

 

