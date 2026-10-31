let age = 25;

if (age >= 15){
    console.log("You are old.");
}else{
    console.log("You are a kid.")
}


let time = 9;

if (time < 12){
    console.log("Good Morning.");
}else{
    console.log("Good afternoon.")
}


let student = false;


if(student){
    console.log("You are a Student.");
}else{
    console.log("You are not a student.")
}



let  = document.getElementById("input")
let hasLicense = true;


let userAge = 0

const submitBtn = document.getElementById("button")

submitBtn.onclick = function(){

    if(userAge < 0 && userAge > 100){
        document.getElementById("text").textContent = "You cant be 0 years old or 100+ years old."
        console.log("You cant be 0 years old or 100+ years old.")
    }else if (userAge <= 16){
        console.log("You are not old enough to drive")
    }else{
        console.log("You are 16+ years old!")
        if(hasLicense){
            console.log("You totally can Drive.")
        }else{
            console.log("You need to apply for Driving License.")
        }
    }
}
