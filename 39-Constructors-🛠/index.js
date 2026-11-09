
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
};

const car1 = new Car("Ford", "Mustang", 2025, "Yellow");
const car2 = new Car("Chevrolet", "Camaro", 2025, "Blue");
const car3 = new Car("Dodge", "Charger", 2025, "Silver");


console.log(car1.make);
console.log(car1.model);


console.log(car2.make);
console.log(car2.model);

console.log(car3.make);
console.log(car3.model);