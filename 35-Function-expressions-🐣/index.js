// function declaration = define a reusable block of code that performs a specific task.
// function expressions = a way to define function as values or variables.


// function declaration

function hello(){
   console.log(`Hello!`); 
}

hello();


// function expressions

// const bye = function bye() { console.log("Bye!");}

// or

const bye = function bye(){
    console.log("Bye!");
}

bye();



// this is normal function declaration

/*
const numbers = [1,2,3,4,5,6];
const sumNUmbers = numbers.reduce(sumnums);

console.log(sumNUmbers);

function sumnums(firstElement, nextElement){
    return firstElement + nextElement;
}
*/


// this is function expression



const numbers = [1,2,3,4,5,6];

const sumNUmbers = numbers.reduce(
                                function (firstElement, nextElement){
                                    return firstElement + nextElement;
                                });

console.log(sumNUmbers);