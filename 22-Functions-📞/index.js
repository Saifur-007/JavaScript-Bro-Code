function happyBirthday(userNam, age){
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday to ${userNam}!`);
    console.log(`You are ${age} years old!`)
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
}
happyBirthday("Saif" , 25);
happyBirthday("Alu" , 35);
happyBirthday("lolo" , 455);


function add(x,y){
    let result = x+y;
    return result;
}
function multiply(x,y){
    return x*y;
}


console.log(multiply(9,10));
console.log(add(5,6));


function numCheck(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}


console.log(numCheck(15));


function isEven(num){
    return num % 2 === 0 ? true : false;
}

console.log(isEven(14));






function isValidEmail(email){
    
    if(email.includes("@")){
        return true;
    }else{
        return false;
    }
}
console.log(isValidEmail("bo@gmail.com"));
console.log(isValidEmail("bogmail.com"));