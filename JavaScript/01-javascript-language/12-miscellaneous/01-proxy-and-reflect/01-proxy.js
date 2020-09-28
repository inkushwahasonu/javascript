
// Proxy and REflects

// Proxy

// syntax   ->   let proxy = new Proxy(target, handler)




let target = {};
let proxy = new Proxy(target, {});    // empty handler

proxy.test = 5;   // writing to proxy (1)
console.log(target.test); // 5, the property appeared in target!
console.log(proxy.test) ;    // 5, we can read it from proxy too 
for(let key in proxy) console.log(key);   // test, iteration works


