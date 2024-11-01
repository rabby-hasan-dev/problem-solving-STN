/* 
6.Task: Array Reduction

Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
*/

const numbers = [3, 7, 12, 25, 30, 42, 55, 68, 77, 89];

function sumEvenNumbers(arr) {
    return arr.reduce((sum, num) => {
        if (num % 2 === 0) {
            return sum + num;
        }
        return sum;
    }, 0);
}


console.log(sumEvenNumbers(numbers)); // Output: 152