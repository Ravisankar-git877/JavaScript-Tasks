let marks = Number(prompt("Enter Student Marks:"));

let total = marks;
let percentage = marks;

console.log("Total Marks:", total);
console.log("Percentage:", percentage + "%");

if (percentage >= 90) {
    console.log("Grade: A+");
} else if (percentage >= 80) {
    console.log("Grade: A");
} else if (percentage >= 70) {
    console.log("Grade: B");
} else if (percentage >= 60) {
    console.log("Grade: C");
} else {
    console.log("Fail");
}