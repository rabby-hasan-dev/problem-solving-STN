/* 
7.  Task: Leap Year Checker

Write a function that determines whether a given year is a leap year.

Example: Happy New Year

*/


function isLeapYear(year) {
    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It is a leap year
    } else {
        return false; // It is not a leap year
    }
}

// leap yaer check
const year = 2024;

if (isLeapYear(year)) {
    console.log(`${year} is a leap year. Happy New Year!`);
} else {
    console.log(`${year} is not a leap year.`);
}