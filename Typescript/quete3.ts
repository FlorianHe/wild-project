class Person {

    private name : string;
    private age : number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    tellMyName():  void {
        console.log(`I am ${this.name}`);
    }

    tellMyAge() : void {
        console.log(`I am ${this.age} years old`);
    }
}

const male = new Person("John", 40);
const female = new Person("Mary", 35);

male.tellMyName();
male.tellMyAge();
female.tellMyName();
female.tellMyAge();
