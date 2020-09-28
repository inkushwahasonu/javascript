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


//'''''''''''''''''''''''''''
console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,')
// ''''''''''''''''''''''''''
 
// // if there,s  nno count parameter , show " unknown"

// function showCount(count){
//   console.log(count ?? 'unKnown');      // dont suport null or undefined firsty
// }

// showCount(0);   // 0
// showCount(null);   // unknown
// showCount();      // unknown
