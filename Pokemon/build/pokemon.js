"use strict";
class Pokemon {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    tellMyName() {
        console.log(`I am ${this.name}`);
    }
    tellMyAge() {
        console.log(`I am ${this.age} years old`);
    }
}
const male = new Person("John", 40);
const female = new Person("Mary", 35);
male.tellMyName();
male.tellMyAge();
female.tellMyName();
female.tellMyAge();
