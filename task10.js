/* 
10.Task: Advanced Sorting

Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
*/


// Step 1: Create an array of student objects
const students = [
    { name: "Alice", grades: [85, 92, 78] },
    { name: "Bob", grades: [70, 88, 95] },
    { name: "Charlie", grades: [90, 80, 85] },
    { name: "Diana", grades: [60, 70, 80] },
    { name: "Ethan", grades: [95, 100, 90] }
];

// Step 2: Function to calculate average grade
function calculateAverage(grades) {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length; // Calculate the average
}

// Step 3: Function to sort students by average grade in descending order
function sortStudentsByAverageGrade(students) {
    return students.sort((a, b) => {
        const avgA = calculateAverage(a.grades);
        const avgB = calculateAverage(b.grades);
        return avgB - avgA; // Sort in descending order
    });
}

const sortedStudents = sortStudentsByAverageGrade(students);
console.log("Students sorted by average grade (descending):");
console.log(sortedStudents);
