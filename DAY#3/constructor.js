// constructor function
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let jack = new User("Jack");
let apin = new User("Apin");

console.log(jack);
console.log(apin);