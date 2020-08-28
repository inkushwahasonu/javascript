// default value 

function showMessage(from, text = "no text given."){     // default parameter vlue
  console.log(from + ' : ' + text);

}
showMessage("Anna");     // Anna : no text given

//'''''''''''''''''''''''''''
console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,')
// ''''''''''''''''''''''''''

// alternative default parameter

function showData(text){
  if( text === undefined){
    text = 'hello empty message';
  }
  console.log(text);
}
showData();