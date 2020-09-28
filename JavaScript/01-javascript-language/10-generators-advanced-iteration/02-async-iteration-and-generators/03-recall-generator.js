
// recall generator


function* generateSequence(start, end){
  for(let i = start; i <= end; i++){
    yield i;
  }
}
for(let value of generateSequence(1, 5)) {
  console.log(value);         //  1, then 2, then 3, then 4, then 5
}

/** */console.log("--------------------------------------------------");

let range = {
  from : 1,
  to : 5,
  *[Symbol.iterator](){
    for ( let value = this.from; value <= this.to; value++){
      yield value;
    }
  }
};
for (let value of range){
  console.log(value);        // 1, then 2, then 3, then 4, then 5
}