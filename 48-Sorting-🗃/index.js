const people = [
    {name: "Saif", age: 25, gpa: 3.5},
    {name: "Bo", age: 20, gpa: 2.6},
    {name: "Jack", age: 21, gpa: 2.9},
    {name: "Uri", age: 20, gpa: 3.9},
    {name: "Max", age: 23, gpa: 4.0},
];



people.sort((a,b) => a.age - b.age);

people.sort((a,b) => a.name.localeCompare(b.name));

console.log(people);