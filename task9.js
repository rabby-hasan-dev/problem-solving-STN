/* 
09. Task: Find Maximum Value:

Write a function that takes an array of numbers and returns the maximum value.
*/



// solution-1

// Function to find the maximum value in an array of numbers
function findMaximumValue1(array) {
    // Check if the array is empty
    if (array.length === 0) {
        return null; // Return null for empty arrays
    }

    // Initialize the maximum value with the first element of the array
    let maxValue = array[0];

    // Iterate through the array to find the maximum value
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i]; // Update maxValue if current element is greater
        }
    }

    return maxValue; // Return the maximum value found
}


const numbers1 = [3, 5, 7, 2, 8, -1, 4];
const maxValue1 = findMaximumValue1(numbers1);
console.log(`The maximum value is: ${maxValue1}`);
// Output: The maximum value is: 8








// solution-2

function findMaximumValue2(array) {
    return array.length === 0 ? null : Math.max(...array);
}


const numbers2 = [3, 5, 7, 2, 8, -1, 4];
const maxValue2 = findMaximumValue2(numbers2);
console.log(`The maximum value is: ${maxValue2}`);
// Output: The maximum value is: 8