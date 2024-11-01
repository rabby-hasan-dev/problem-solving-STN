/* 
1.Task: Array Filtering and Mapping
Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
*/

const peoples = [
    { name: "Alice", age: 28, gender: "Female" },
    { name: "Bob", age: 35, gender: "Male" },
    { name: "Charlie", age: 22, gender: "Male" },
    { name: "Diana", age: 30, gender: "Female" },
    { name: "Ethan", age: 40, gender: "Male" },
    { name: "Fiona", age: 25, gender: "Female" },
    { name: "George", age: 27, gender: "Male" }
];



function getMaleNames(array) {
    return array
        .filter(person => person.gender !== "Female")
        .map(person => person.name);
}


const maleNames = getMaleNames(peoples);
console.log(maleNames);
/* Final result: [ 'Bob', 'Charlie', 'Ethan', 'George' ] */
