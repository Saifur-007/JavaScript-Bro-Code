const maxNum = 100;
const minNum = 1;
const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let userInput;

let attempts = 0;
let running = true;



while(running){
    userInput = window.prompt(
        `Guess a number between ${minNum} - ${maxNum}: `
    );

    if (userInput === null) {
        running = false;
        break;
    }

    if (userInput.trim() === "") {
        window.alert("Plz enter a valid number.");
        continue;
    }

    userInput = Number(userInput);

    if (isNaN(userInput)) {
        window.alert("Plz enter a valid number.");
    }
    else if(userInput < minNum || maxNum < userInput){
        window.alert(`Plz enter a valid number between ${minNum} - ${maxNum}.`);
    }
    
    else{
        if (userInput === 100 && randomNum === 100) {
            window.alert("Both numbers are 100!");
            running = false;
        }
        else if(    
            userInput >= 90 && userInput <= 99 &&
            randomNum >= 90 && randomNum <= 99
        ) {
            window.alert("Both numbers are in the 90s!");
            running = false;
        }
        else if(    
            userInput >= 80 && userInput <= 89 &&
            randomNum >= 80 && randomNum <= 89
        ) {
            window.alert("Both numbers are in the 80s!");
            running = false;
        }
        else if(    
            userInput >= 70 && userInput <= 79 &&
            randomNum >= 70 && randomNum <= 79
        ) {
            window.alert("Both numbers are in the 70s!");
            running = false;
        }
        else if(    
            userInput >= 60 && userInput <= 69 &&
            randomNum >= 60 && randomNum <= 69
        ) {
            window.alert("Both numbers are in the 60s!");
            running = false;
        }
        else if(    
            userInput >= 50 && userInput <= 59 &&
            randomNum >= 50 && randomNum <= 59
        ) {
            window.alert("Both numbers are in the 50s!");
            running = false;
        }
        else if(    
            userInput >= 40 && userInput <= 49 &&
            randomNum >= 40 && randomNum <= 49
        ) {
            window.alert("Both numbers are in the 40s!");
            running = false;
        }
        else if(    
            userInput >= 30 && userInput <= 39 &&
            randomNum >= 30 && randomNum <= 39
        ) {
            window.alert("Both numbers are in the 30s!");
            running = false;
        }
        else if(    
            userInput >= 20 && userInput <= 29 &&
            randomNum >= 20 && randomNum <= 29
        ) {
            window.alert("Both numbers are in the 20s!");
            running = false;
        }
        else if(    
            userInput >= 10 && userInput <= 19 &&
            randomNum >= 10 && randomNum <= 19
        ) {
            window.alert("Both numbers are in the 10s!");
            running = false;
        }
        else if(    
            userInput >= 1 && userInput <= 9 &&
            randomNum >= 1 && randomNum <= 9
        ) {
            window.alert("Both numbers are in the 1s!");
            running = false;
        }
        attempts++
    }
}