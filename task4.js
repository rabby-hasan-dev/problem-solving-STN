/* 4.Task: Sorting Objects

Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array. */


const cars = [
    { make: "Toyota", model: "Camry", year: 2020 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Ford", model: "Mustang", year: 2019 },
    { make: "Chevrolet", model: "Impala", year: 2017 },
    { make: "Tesla", model: "Model S", year: 2021 },
    { make: "BMW", model: "3 Series", year: 2020 },
    { make: "Audi", model: "A4", year: 2019 }
];

//  sort cars data with year in ascending order

const sortedCars = cars.sort((a, b) => (a.year - b.year));

console.log(sortedCars);