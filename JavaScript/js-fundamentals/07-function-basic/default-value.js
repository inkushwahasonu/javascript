// default value 

function showMessage(from, text = "no text given."){     // default parameter vlue
  console.log(from + ' : ' + text);

}
showMessage("Anna");     // Anna : no text given