let max = 100;
let min = 50;


let randomNum = 0;

document.getElementById("randomBtn").onclick = function(){
    randomNum = Math.floor((Math.random() * (max-min +1)) + min);
    document.getElementById("text").textContent = randomNum;
}