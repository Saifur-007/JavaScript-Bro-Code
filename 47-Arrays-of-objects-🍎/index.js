const fruits = [
            {name: "apple", color: "red", calories: 95},
            {name: "orange", color: "orange", calories: 45},
            {name: "banana", color: "yellow", calories: 105},
            {name: "coconut", color: "white", calories: 159},
            {name: "pineapple", color: "yellow", calories: 37},
];

// fruits.pop();
// fruits.shift();
// console.log(fruits.splice(1,3));

fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.calories));

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);


const lowCalories = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalories);


const highCalories = fruits.filter(fruit => fruit.calories >= 100);
console.log(highCalories);

const heightsCalories = fruits.reduce((max, next) => next.calories > max.calories ? next : max);
console.log(heightsCalories);

const lowestCalories = fruits.reduce((min, next) => next.calories < min.calories ? next : min);
console.log(lowestCalories);