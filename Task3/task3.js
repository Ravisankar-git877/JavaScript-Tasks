let studentName = prompt("Enter Student Name:");
let marks = Number(prompt("Enter Student Marks:"));

console.log("Student Name: " + studentName);
console.log("Marks: " + marks);

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}