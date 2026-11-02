let fullName = "Saifur Rahman";

let firstName = fullName.slice(0, 6);
let lastName = fullName.slice(7);

console.log(firstName);
console.log(lastName);

let firstChart = fullName.slice(0, 1);


let userName = "Alu Mu";

let userFirstName = userName.slice(0, userName.indexOf(" "));
let userLastName = userName.slice(userName.indexOf(" ") + 1 );

console.log(userFirstName);
console.log(userLastName);


let email = "demo@gmail.com";

let eUserName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1 );

console.log(eUserName);
console.log(extension);