const userInput = document.getElementById("userInput");
const celsiusBox = document.getElementById("celsiusBox");
const fahrenheitBox = document.getElementById("fahrenheitBox");
const submitBtn = document.querySelector("button");
const result = document.querySelector("p");

let temp;

function convert(){
    if(celsiusBox.checked){
        temp = Number(userInput.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(fahrenheitBox.checked){
        temp = Number(userInput.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a Unit";
    }
}

submitBtn.onclick = convert;