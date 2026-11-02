let userName = " Saifuri ";

console.log(userName.charAt(0));
console.log(userName.indexOf("i"));
console.log(userName.lastIndexOf("i"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.startsWith(" "));
console.log(userName.endsWith(" "));

if(userName.startsWith(" ")){
    console.log("Remove the space from you username.");
}else{
    console.log("You ok.")
}

if(userName.includes(" ")){
    console.log("Remove the space from you username.");
}else{
    console.log("You ok.")
}

let phoneNum = "123-45-6-789";


// its only removed one -, because its replace not replaceAll

phoneNum = phoneNum.replace("-", "");

console.log(phoneNum);

phoneNum = phoneNum.replaceAll("-", "");

console.log(phoneNum);

let num1 = "123456789";

num1 = num1.padStart(20, "0");
console.log(num1);

let num2 = "123456789";

num2 = num2.padEnd(20, "0");
console.log(num2);