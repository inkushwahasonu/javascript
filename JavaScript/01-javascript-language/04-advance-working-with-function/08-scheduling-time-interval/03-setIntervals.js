
// setInterval
// th esetInterval method has the same syntax as settimeout

// let timerId = setInterval(func|ConvolverNode, [delay], [arg1], [arg2], ...)



// repeat with the interval of 2 seconds
let timerId = setInterval( () => console.log('tick'), 4000);

// after 5 seconds stop
setTimeout(() => {clearInterval(timerId); console.log('stop');}, 8000);