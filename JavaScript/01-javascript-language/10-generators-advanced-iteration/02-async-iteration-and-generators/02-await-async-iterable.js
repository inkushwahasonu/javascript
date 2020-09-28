
// async iterables

// Asynchronous iteration is needed when values come asynchronously: after setTimeout or another kind of delay.
/*
o make an object iterable asynchronously:

Use Symbol.asyncIterator instead of Symbol.iterator.
The next() method should return a promise (to be fulfilled with the next value).
The async keyword handles it, we can simply make async next().
To iterate over such an object, we should use a for await (let item of iterable) loop.
Note the await word.

*/


let range ={
  from :1,
  to : 5,
  [Symbol.asyncIterator](){
    return {
      current : this.from,
      last : this.to,
      async next() {
        // note : we can use "await" inside the async next :
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (this.current <= this.last){
          return{done:false, value: this.current++};
        }else{
          return{done :true};
        }
      }
    };
  }
};

(async () => {
  for await ( let value of range) {
    console.log(value);     // 1, 2, 3, 4, 5
  }
})()