
// Revocable Proxies

// A revocable proxy is a proxy that can be disabled

let object ={
  data : "Valuable data"
};
let{proxy, revoke} =Proxy.revocable(object, {});

//pass the proxy somewhere instead of object...
console.log(proxy.date);  // Valuable data

// later in our code
revoke();

// the proxy isn't working any more(revoked)
console.log(proxy.data); // Error


/*** */ console.log("-------");
/*

let revokes = new WeakMap();
let object = {
  data : "Valuable data"
};
let{proxy, revoke} = Proxy.revocable(object, {});
revokes.set(proxy, revoke);

//..later in our code..
revoke = revokes.get(proxy);
revoke();
console.log(proxy.data);    // Error  (revoked)

*/