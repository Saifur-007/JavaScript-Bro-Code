const me = {
    fullName: "Saifur Rahman Alamin",
    age: 25,
    isStudent: true,
    hobbies: ["Game", "Football", "Sleep"],
    address: {
        city: "No Idea",
        country: "UK",
    },
};

console.log(me);
console.log(me.hobbies);
console.log(me.address);

for(const property in me.address){
    console.log(me.address[property]);
};


class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(city, country){
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Saif", 25, "No Idea", "UK");

console.log(person1);