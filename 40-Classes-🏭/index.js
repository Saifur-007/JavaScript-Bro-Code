class Product{
    constructor(name, prize){
        this.name = name;
        this.prize = prize;
    }

    display(){
        console.log(`Product: ${this.name}.`);
        console.log(`Prize: $${this.prize.toFixed(2)}.`)
    }

    calculateTotal(salesTax){
        return this.prize + (this.prize * salesTax);
    }
}

const salesTax = 0.5;
const product1 = new Product("Shirt", 15);
const product2 = new Product("Pants", 50);
const product3 = new Product("shoe", 80);

console.log(Object.keys(product1));
console.log(Object.values(product1));


product1.display();
product2.display();
product3.display();


const total = product1.calculateTotal(salesTax);

console.log(total.toFixed(2));