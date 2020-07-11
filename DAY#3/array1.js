// create array
let fruits = ['Apple', 'Banana']
console.log(fruits.length)
// 2

// Access an Array item using the index position
let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana

// Loop over an Array
fruits.forEach(function(item, index, array) {
    console.log(item, index)
})
// Apple 0
// Banana 1

// Add an item to the end of an Array
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]

// Remove an item from the end of an Array
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]

// Remove an item from the beginning of an Array
let first = fruits.shift() // remove Apple from the front
// ["Banana"]

// Add an item to the beginning of an Array
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]

// Find the index of an item in the Array
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1

// Remove an item by index position
let removedItem = fruits.splice(pos, 1) // this is how to remove an item

// ["Strawberry", "Mango"]