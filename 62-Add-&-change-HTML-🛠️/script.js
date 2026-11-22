const newH1 = document.createElement("h1");

newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "Tomato";
newH1.style.textAlign = "center";

// for in the start
// document.body.prepend(newH1);

// document.getElementById("box2").append(newH1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);


// for in the last
// document.body.append(newH1);
