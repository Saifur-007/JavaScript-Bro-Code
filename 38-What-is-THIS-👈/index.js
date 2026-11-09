// this is a keyword for to use as a context.

const person1 = {
    name: "Saif",
    age: 25,
    isStudent: true,
    // I can use person1.name but its not ok, so using this keyword is better.
    intro: function(){console.log(`${this.name} is ${this.age} years old.`)},
    // this keyword don't work properly when the function is arrow function, so use normal function.
    bio: () => console.log(`${this.name} is a student? ${this.isStudent}`),
};
const person2 = {
    name: "Boo",
    age: 999,
    isStudent: false,
    intro: function(){console.log(`${this.name} is ${this.age} years old.`)},
    bio: function(){console.log(`${this.name} is a student? ${this.isStudent}`)},
}

console.log(Object.keys(person1));
console.log(Object.values(person1));

person1.intro();
person1.bio();

// all do you see the difference if i used the person1.name, for each object i need to replace with that object name. But we can just use this keyword as context for that object and its work well.

// Look i used the function normally and the this keyword worked well.
person2.intro();
person2.bio();


console.log(Object.keys(person2));
console.log(Object.values(person2));