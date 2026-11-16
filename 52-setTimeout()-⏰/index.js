function sayHello(){
    console.log("Hello!");
}

setTimeout(sayHello, 3000);

setTimeout(() => {
    console.log("Bye!")
}, 6000);