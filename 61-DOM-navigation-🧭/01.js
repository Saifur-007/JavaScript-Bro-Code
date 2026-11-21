// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;

firstChild.style.backgroundColor = "yellow";


const element2 = document.getElementById("vegetables");
const firstChild2 = element2.firstElementChild;

firstChild2.style.backgroundColor = "yellow";


const element3 = document.getElementById("desserts");
const firstChild3 = element3.firstElementChild;

firstChild3.style.backgroundColor = "yellow";



const element4 = document.getElementById("fruits");
const firstChild4 = element4.lastElementChild;

firstChild4.style.backgroundColor = "pink";




const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "blue";
});


ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "red";
});


const element5 = document.getElementById("vegetables");

element5.nextElementSibling.style.backgroundColor = "pink";