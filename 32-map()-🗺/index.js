const names = ["saif", "alu", "jack"];
const upperNames = names.map(uppercase);

console.log(upperNames);


function uppercase(element){
    return element = element.toUpperCase();   
}

const numbers = [1,2,3,4,5,6];
const squaredNumbers = numbers.map(square);

console.log(numbers);
console.log(squaredNumbers);

function square(element){
    return element = Math.pow(element, 2);
}