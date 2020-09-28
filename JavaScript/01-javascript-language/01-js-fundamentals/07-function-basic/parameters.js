// parameters in function

function showMessage(form, text){
  console.log(form + ':' +text);
}
showMessage('Anna ', ' hello');       // Ann : hello
showMessage('Anna ', " what's up");  // Anna : what's up



//'''''''''''''''''''''''''''
console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,')
// ''''''''''''''''''''''''''
 

function showDetail(form , text){
  form = '*' + form + '*'; 
  console.log(form + ' : ' + text);
}
let form = 'Anna';

showDetail(form, "Hello");
console.log(form);


