// .EventListener = listen for specific events to create interactive web pages
//                  events : click, mouseOver, mouseOut
//                  .addEventListener(event, function or arrow function);

const myBox = document.getElementById("myBox");

function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕"
}

myBox.addEventListener("click", changeColor);

myBox.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😦";
})

myBox.addEventListener("mouseout", event =>{
    event.target.style.backgroundColor = "lightGreen";
    event.target.textContent = "Click Me 😄";
})