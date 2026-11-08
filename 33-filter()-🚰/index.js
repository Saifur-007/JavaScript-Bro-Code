// .filter() = creates a new array by filtering out elements;

let numbers = [1,2,3,4,5,6,7,8,9,10];

let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);


console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);


function isEven(element){
    return element % 2 === 0;
}


function isOdd(element){
    return element % 2 !== 0;
}



let ages = [16, 18, 19, 14, 20, 60, 85, 12];
let adults = ages.filter(isAdult);
let kids = ages.filter(isKid);

console.log(ages);
console.log(adults);
console.log(kids);

function isAdult(element){
    return element >= 18;
}

function isKid(element){
    return element < 18;
}