// ignore elements using commas
/*** */ console.log("-----------------------------------01------------ignore elements using commas----------------------------");



// second & third element is not need  ( ignored by comma)
let [firstName, , ,title] = ["Julius", "Caeser", "Consul", "of the Roman Republic"];
console.log(title);   // Consul