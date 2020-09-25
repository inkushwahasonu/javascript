
// async generators (finally)

async function* generateSequence(start, end) {
  for ( let i = start; i<= end; i++){

    // Whow, can use await!
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }
}
(async() => {
  let generator = generateSequence(1, 5);
  for await(let value of generator) {
    console.log(value);     // 1, then 2, then 3, then 4, then 5 (with delay between)
  }
})();


/*** */console.log("------------------------------------------");

let range = {
  from : 1,
  to : 5,
  // this line is same as [Symbol.asyncIterator]: async function*() {
  async *[Symbol.asyncIterator](){
    for(let value = this.from; value<=this.to; value++){
      // make a pause between values, await for something
      await new Promise(resolve => setTimeout(resolve, 1000));
      yield value;
    }
  }
};

(async () => {
  for await (let value of range){
    console.log(value);                   // 1, then 2, then 3, then 4, then 5
  }
})();