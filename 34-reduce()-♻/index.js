const numbers = [1,2,3,4,5,6];
const sumOfNumber = numbers.reduce(sum);

console.log(`$${sumOfNumber.toFixed(2)}`);

function sum(firstElement, nextElement){
    return firstElement + nextElement;
}

const grades = [77, 85, 89, 39, 42];
const maxGrade = grades.reduce(maxgrade);
const minGrade = grades.reduce(mingrade);


console.log(maxGrade);
console.log(minGrade);


function maxgrade(firstElement, nextElement){
    return Math.max(firstElement, nextElement);
}


function mingrade(firstElement, nextElement){
    return Math.min(firstElement, nextElement);
}