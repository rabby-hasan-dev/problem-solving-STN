/* 
5.Task: Find and Modify

Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
 */



const people = [
    { name: "Alice", age: 28, gender: "Female" },
    { name: "Bob", age: 35, gender: "Male" },
    { name: "Charlie", age: 22, gender: "Male" },
    { name: "Diana", age: 30, gender: "Female" }
];

function updateAgeByName(array, name, newAge) {
    const person = array.find(person => person.name === name);
    if (person) {
        person.age = newAge;
    }
    console.log(array);
}

// 
updateAgeByName(people, "Alice", 29);