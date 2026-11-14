class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    moves(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}mph`);
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed=swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.moves(this.swimSpeed);
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.moves(this.runSpeed);
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.moves(this.flySpeed);
    }
}

const fish = new Fish("fish", 2, 15);
const hawk = new Hawk("hawk", 3, 50);
const rabbit = new Rabbit("rabbit", 2, 30);

console.log(hawk);
console.log(fish);
console.log(rabbit);

console.log(rabbit.swimSpeed); // this object don't have access of swimSpeed.
console.log(rabbit.runSpeed);

fish.swim();
rabbit.run();
hawk.fly();