// comparing string

console.log('a' > 'z') ;   /// false
console.log('a' > 'Z');    // true
console.log('Österreich' > 'Zealand') ;   // true



// correct comparisons

console.log('Österreich'.localeCompare('Zealand')) ;   // -1