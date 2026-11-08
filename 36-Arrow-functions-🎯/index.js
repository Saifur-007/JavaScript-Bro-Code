// This is normal function

function hello (){
    console.log("Hello!");
}

hello();

// This is arrow function

let bye = () => console.log("Bye!");

bye();

// Test

const hi = (name) => console.log(`Hi ${name}!`);

hi("Saif");


// .map()

const numbers = [1,2,3,4,5,6,7,8,9,10];

const squares = numbers.map((element) => Math.pow(element, 2));
const triples = numbers.map((element) => Math.pow(element,3));
const evenNumbers = numbers.filter((element) => element % 2 ===0);
const oddNumbers = numbers.filter((element) => element % 2 !== 0);
const sumNumbers = numbers.reduce((firstElement, nextElement) => firstElement + nextElement);

console.log(squares);
console.log(triples);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(sumNumbers);