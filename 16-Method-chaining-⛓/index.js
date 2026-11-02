let userName = window.prompt("Enter your name: ");


// No Method Chaining

/*
userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
useName = letter + extraChars;
*/

// Method Chaining

userName = userName.trim().charAt().toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName);