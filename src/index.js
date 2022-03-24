//What is Shallow Comparison

// Triple equals and shallow comparison is the same
// for the Primitive Types

//Primitive Types (strings,numbers, booleans)
console.log("Hi" === "Hi")

// It is not the same, you can compare the property inside
// the object will return true, but when 2 same objects
// are compared it will return false

// Also another definition  , is it is shallow equal when
// the top property inside the objects are equal

// if there is an object inside an object, that is not the top property.

//Complex Types (array,object)
console.log({ name: "Joe" } === { Name: "Joe" })

const state = {
  favNumber: 16,
  name: "Kamil",
  address: {
    street: "America",
  },
}

const state2 = {
  favNumber: 16,
  name: "Latif",
  address: {
    street: "America",
  },
}

console.log(state.favNumber === state2.favNumber)
console.log(state.name === state2.name)
console.log(state.address === state2.address)
console.log(state.address.street === state2.address.street)

const person = {
  name: "Sarah",
}

const anotherPerson = person

console.log(anotherPerson === person)

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]

console.log((arr1 = arr2)) // will return false

arr1 = [1, 2, 3, [4]]
arr2 = [1, 2, 3, [4]]

console.log((arr1 = arr2)) // will return false as well because
// the [4] isn't shallow equal.
