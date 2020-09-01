let name = "john";          // outer variable
function showData(){
  let message = "hello, " + name; 
  console.log(message);
}
showData();    // hollo, jhon
showData();    // hello, jhon



//'''''''''''''''''''''''''''
console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,')
// ''''''''''''''''''''''''''


// full full access of outer variable

  let userName = 'sumit'   // outer variable
function showMessage(){
  userName = "amit";              // local variable
  let message = 'you are ' + userName;
  console.log(message);
}
console.log(userName);     // sumit   ( before function calling)
showMessage();            // function calling

console.log(userName);     //  amit  ( after function calling)


//'''''''''''''''''''''''''''
console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,')
// ''''''''''''''''''''''''''
 let studentName = 'Sankar';
 function showDetail(){
   let studentName = "Sumeshwar";
   let message = ' My name is  ' +studentName;
   console.log(message);
 }
 console.log(studentName);
 showDetail();
 console.log(studentName);




//'''''''''''''''''''''''''''
console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,')
// ''''''''''''''''''''''''''
 