let lists = ["egg", "dim", "pan"];

let nums = [1,2,3,4,5];

let maxNum = Math.max(...nums);

let minNum = Math.min(...nums);

console.log(maxNum);

console.log(minNum);

console.log(nums);
console.log(...nums);



console.log(lists);
console.log(...lists);


let name = "Saifur Rahman Alamin";

console.log(name);

let letters = [...name].join("-");

console.log(letters);


let fruits = ["apple","banana","orange","mango"];
let newFruits = [...fruits];
let vegetables = ["carrot","celery","potatoes"]

console.log(fruits);
console.log(...fruits);
console.log(newFruits);
console.log(...newFruits);


let foods = [...fruits, ...vegetables, "eggs", "dim" ];
console.log(foods);