// Random Password Generator

function passwordGenerator(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = `!@#$%^&*()-_=+[]{};:'"|,.<>/?`;

    let allowedChart = "";
    let password = "";

    allowedChart += includeLowerCase ? lowerCase : "";
    allowedChart += includeUpperCase ? upperCase : "";
    allowedChart += includeNumbers ? numbers : "";
    allowedChart += includeSymbols ? symbols : "";

    if(length <= 0 ){
        return `(Password Length must be at least 1)`;
    }
    if(allowedChart.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomNum = Math.floor(Math.random() * allowedChart.length);
        password += allowedChart[randomNum];
    }
    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = passwordGenerator(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Generated Password: ${password}`);