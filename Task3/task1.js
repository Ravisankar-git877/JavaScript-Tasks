let empName = prompt("Enter Employee Name:");
let empAge = prompt("Enter Employee Age:");
let empDepartment = prompt("Enter Employee Department:");
let empSalary = Number(prompt("Enter Employee Salary:"));

const employee = {
  name: "RavisankarVadlamudi",
  age: 23,
  department: "SoftwareDeveloper",
  salary: 50000
};

console.log("Employee Details:");
console.log(employee);

if (empSalary > 30000) {
  console.log("Eligible for Bonus");
} else {
  console.log("Not Eligible");
}
