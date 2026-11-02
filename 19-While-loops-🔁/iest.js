let loggedIN = false;
let userName;
let password;

do{
    userName = window.prompt("Enter your User Name: ");
    password = window.prompt("Enter your Password: ");

    if(userName === "ME" && password === "OK"){
        loggedIN = true;
        console.log("You are logged in!");
    }else{
        console.log("Invalid credentials! Plz try again.");
    }
}while(!loggedIN)
