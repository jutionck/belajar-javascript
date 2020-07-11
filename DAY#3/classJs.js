class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    walk() {
        console.log(`${this.name} berjalan menggunakan kaki`);
    }
}

let jution = new Person("Jution", 25);
console.log(jution)
jution.walk()