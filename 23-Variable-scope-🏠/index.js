
// Local scope

function function1(){
   let x = 1; 
    console.log(x);
}

function function2(){
   let x = 8; 
    console.log(x);
}


function1();
function2();


// Global scope

let x = 1;

function function3(){
    console.log(x);
}

function3();