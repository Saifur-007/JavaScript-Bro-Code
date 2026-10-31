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





const input = document.getElementById("input");
const submitBtn = document.getElementById("button");
const outText = document.getElementById("outText");
let hasLicense = true;
let userAge;


submitBtn.onclick = function(){
    
    userAge = input.value;
    userAge = Number(userAge);

    if(userAge < 0 || userAge > 100){
        outText.textContent = `You cant be 0 years old or 100+ years old.`;
    }else if (userAge <= 16){
        outText.textContent = `You are not old enough to drive`;
    }else{
        outText.textContent = `You are 16+ years old!`;
        if(hasLicense){
            outText.textContent = `You totally can Drive.`;
        }else{
            outText.textContent = `You need to apply for Driving License.`;
        }
    }
}
