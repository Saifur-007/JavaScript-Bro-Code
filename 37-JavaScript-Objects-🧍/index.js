const person1 = {
    firstName: "Saifur Rahman",
    lastName: "Alamin",
    age: 25,
    isStudent: true,
    sayHi: () => console.log("Hi, I am Saif.")
};

const person2 = {
    firstName: "Bo",
    lastName: "Noop",
    age: 9999,
    isStudent: false,
    sayHi: function(){console.log("BO BO BO!")},
};


console.log(person1.firstName);
person1.sayHi();


console.log(Object.keys(person1));
console.log(Object.values(person1));



person2.sayHi();
console.log(`Hi, My name is ${person2.firstName} ${person2.lastName}.`)


