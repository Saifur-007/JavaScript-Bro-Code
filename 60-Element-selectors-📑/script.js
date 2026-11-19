// document.getElementById() // Element or NULL
// document.getElementsByClassName() // HTML COLLECTION
// document.getElementsByTagName() // HTML COLLECTION
// document.querySelector() // Element OR NULL
// document.querySelectorAll() // NODE LIST


const myHeading = document.getElementById("my-h1");

myHeading.style.backgroundColor = "Red";
myHeading.style.textAlign = "center";


const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "yellow"

console.log(fruits);

for (let fruit of fruits){
    fruit.style.backgroundColor = "pink"
}

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "blue";
});

const h4Elements = document.getElementsByTagName("h4")

for(let h4Element of h4Elements){
    h4Element.style.color = "white"
}

h4Elements[0].style.backgroundColor = "pink"
h4Elements[1].style.backgroundColor = "red"


const liElements = document.getElementsByTagName("li")

Array.from(liElements).forEach(liElement =>{

    liElement.style.backgroundColor = "green";
})


const element = document.querySelector(".fruits");

element.style.backgroundColor = "pink";


const allFruits = document.querySelectorAll(".fruits");

console.log(allFruits);

allFruits.forEach(allFruit => {
    allFruit.style.backgroundColor = "orange"
})