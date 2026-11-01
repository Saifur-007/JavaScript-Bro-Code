// 12 Ternary operator

// Its like if and else; condition ? if the condition is true : if the condition is false;

// age

let age = 15;

let message = age > 18 ? "You are 18+ years old." : "You are under 18!";

console.log(message);


// Time

let time = 16;

let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";

console.log(greeting);


// student

let student = false;

let greet = student? "You are a Student" : "You are not a Student";

console.log(greet);


// discount

let purchaseAmount = 102;
let afterDiscount;

const discount = purchaseAmount > 100 ? afterDiscount = (purchaseAmount / 100) * 90 : afterDiscount = purchaseAmount;

console.log(afterDiscount);