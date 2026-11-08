let fruits = ["apple", "egg"];

fruits.forEach(uppercase);


function uppercase(element){
    console.log(element.toUpperCase());
}


let names = ["SAIF", "ALU", "JACK", "MAN"];


names.forEach(lowercase);

function lowercase(element){
    console.log(element.toLowerCase());
}


function lowercase(element, index, array){
    array[index] = element.toLowerCase();
    console.log(array[index]);
}


let numbers = [1,2,3,4,5,6];


numbers.forEach(double);
numbers.forEach(triple);


function double(element){
    element = element * 2;
    console.log(element);
}


function triple(element){
    element = element * 3;
    console.log(element);
}