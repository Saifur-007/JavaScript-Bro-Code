// This is the Easy Way Window Prompt

// let useName;
// useName = window.prompt(`What's your username?`);

// console.log(`So this is your username ${useName}!!!!`);


// This is HTML textbook
let userName;

document.getElementById("mySubmit").onclick = function(){
    userName = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${userName}!`
}