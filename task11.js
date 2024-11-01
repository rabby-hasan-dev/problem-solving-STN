
/* 
11. Task: Functional Programming - Reduce

Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview
*/






const items = [
    { quantity: 2, price: 10.5 },  // Total: 21.0
    { quantity: 1, price: 15.0 },  // Total: 15.0
    { quantity: 4, price: 5.0 },   // Total: 20.0
    { quantity: 3, price: 7.25 }    // Total: 21.75
];


function calculateTotalValue(array) {
    return array.reduce((total, item) => {
        return total + (item.quantity * item.price);
    }, 0);
}


const totalValue = calculateTotalValue(items);
console.log(`The total value of items is: $${totalValue.toFixed(2)}`); // Format to 2 decimal places
