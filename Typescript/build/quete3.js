"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
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
