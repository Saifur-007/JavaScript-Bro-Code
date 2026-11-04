function openFridge(...foods){
    console.log(foods);
    console.log(...foods);
}

let food1 = "apple";
let food2 = "egg";
let food3 = "mango";
let food4 = "hotdog";
let food5 = "ramen";

openFridge(food1,food2,food3,food4,food5);


function addNums(...nums){
    let result = 0;
    for(let num of nums){
        result = num += result;
    }
    return result;
}

let total = addNums(1,5,8);

console.log(total);


function avgNum(...nums){
    let result = 0;
    for(let num of nums){
        result = num += result;
    }
    return result / nums.length;
}

let avg = avgNum(2,5,6,7);
console.log(avg);