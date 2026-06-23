let employeeName = prompt("Enter Employee Name:");
let attendance = prompt("Enter Attendance (Present/Absent):");

console.log("Welcome " + employeeName);

console.log(
  "Attendance: " +
  (attendance === "present"
    ? "Present"
    : "Absent")
);