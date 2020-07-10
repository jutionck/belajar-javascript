// function declaration
// function getName(name) {
//     return name;
// }
//
// console.log(getName("Jution"))

// function expression with default value
let getUsername = function (name) {
    let newName = name === undefined ? "Jution" : name;
    return newName;
}

console.log(getUsername())

// arrow function print a object
// let getUsername = (name, age) => ({name, age})
//
// let user = getUsername("Jution", 25)
// console.log(user)