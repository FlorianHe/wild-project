class Pokemon {

    private name : string;
    private id : number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
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
