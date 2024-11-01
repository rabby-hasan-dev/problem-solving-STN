/* 
8. Task: Unique Values

Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
*/


const numbers = [1, 2, 3, 4, 2, 5, 1, 6, 3, 7, 8, 5];


function getUniqueNumbers(array) {
    return array.filter((number, index) => array.indexOf(number) === index);
}


const uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers);
// Output: [ 1, 2, 3, 4, 5, 6, 7, 8 ]


