const submitBtn = document.getElementById("submit");

const subBtn = document.getElementById("subscribe");

const visaBtn = document.getElementById("visa");
const masterCardBtn = document.getElementById("masterCard");
const payPalBtn = document.getElementById("payPal");

const result = document.getElementById("outPut");


submitBtn.onclick = function(){

    if(subBtn.checked){
        result.textContent = `You Subscribed, Bravo!`;
    }else if(visaBtn.checked){
        result.textContent = `You want to pay by Visa!`;
    }else if(masterCardBtn.checked){
        result.textContent = `You want to pay by MasterCard!`;
    }else if(payPalBtn.checked){
        result.textContent = `You want to pay by PayPal!`;
    }
    else{
        result.textContent = `You didn't Click!`;
    }

}