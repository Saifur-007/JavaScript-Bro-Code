class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }else{
            console.error("Enter a valid First Name.");
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }else{
            console.error("Enter a valid Last Name.");
        }
    }
    set age(newAge){
        if(typeof newAge === "boolean" && newAge >= 0){
            this._age = newAge;
        }else{
            console.log("Enter a valid Age.");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }
}


const person1 = new Person (1,3,"Bo");
const person2 = new Person ("Saifr Rahman", "Alamin", 25);


console.log(person1);

console.log(person2.fullName);
console.log(person2);