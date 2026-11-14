// 01

let a = 1;
let b = 2;

[a , b] = [b, a];

console.log(a, b);

// 02

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

// 03

const [firstColor, secondColor, thirdColor, ...extraColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

console.log(extraColor);


// 04

const person1 = {
    firstName: "Saif",
    lastName: "Alu",
    job: "Student",
}

const person2 = {
    firstName: "Bro",
    lastName: "Code",
}

const {firstName, lastName, job="Programer"} = person2;

console.log(person1.firstName);
console.log(firstName);
console.log(job);


function displayPerson({firstName, lastName, age, job}){
    console.log(`Name: ${firstName + " " +lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}


displayPerson(person1);