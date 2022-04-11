const names = [ 'Bharadwaj', 'Ajay', 'Sudeep', 'Ram', 'Nikhil' ]

const persons = {
    persons: [
      { name: "Stephan", age: 30 },
      { name: "Elenea", age: 27 },
      { name: "Jack", age: 25 },
      { name: "Vicky", age: "23" }
    ],
    someOtherState: 'Some Other State Value',
    showPerson: false
}

let newArr = null
console.log(newArr);

// Spread Operator
newArr = [ "Bob", ...names, "Arun", "Max" ]
console.log(newArr[1]);

// Array Methods
const sortedNames = newArr.sort()
console.log(sortedNames);

const personsNames = persons.persons.map(person => person.name)
console.log(personsNames.sort());

const poppedValue = newArr.pop()
console.log(poppedValue)

// const newPoppedValue = newArr.pop(6)
// console.log(newPoppedValue);

const deletedVal = newArr.splice(6, 1)
console.log(deletedVal)

console.log(newArr)