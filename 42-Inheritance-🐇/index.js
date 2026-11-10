class Animal{
    alive = true;
    
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
}
class Fist extends Animal{
    name = "fist";
}
class Hawk extends Animal{
    name ="hawk";
}