let fruits = ["apple", "mango", "coconut", "banana"];


fruits.sort().reverse();

// fruits.push("orange");
// fruits.unshift("orange");

// fruits.pop();
// fruits.shift()

let index = fruits.indexOf("lemon");

console.log(index);

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let i = fruits.length - 1 ; i >= 0; i--){
    console.log(fruits[i]);
}

console.log("------")
for(let fruit of fruits){
    console.log(fruit);
}
