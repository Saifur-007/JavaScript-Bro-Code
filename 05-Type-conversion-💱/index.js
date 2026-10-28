let x = "0";
let y = "0";
let z = "0"; // If z = "" it will show false, because empty string in boolean is false. 

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);