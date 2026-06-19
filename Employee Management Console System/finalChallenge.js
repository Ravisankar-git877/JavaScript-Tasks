// ------------------------------------
// MINI EMPLOYEE PORTAL
// -------------------------------------

// Employee Object
const employee = {
  name: "Vadlamudi Ravisankar",
  id: "EMP369",
  department: "Development",
  experience: 3,
  salary: 50000,
  attendance: 92,
  company: "Stackly IT",
  location: "Hyderabad"
};

// Skills Array
const skills = ["HTML", "CSS", "JavaScript", "Git"];

// Login Verification
const username = prompt("Enter Username:");
const password = prompt("Enter Password:");

const loginStatus =
  username === "Ravisankar" && password === "2002"
    ? "Success"
    : "Failed";

// Alert
alert("Welcome to Employee Portal");

// Confirm
const todayTask = confirm("Have you completed today's task?");
console.log("Today's Task Completed:", todayTask);

// Attendance Check
const attendanceStatus =
  employee.attendance >= 90 ? "Good Attendance" : "Need Improvement";

// Experience Check
const examStatus =
  employee.experience >= 3 ? "Eligible" : "Not Eligible";

// Bonus Calculation
const bonus = employee.experience >= 3 ? 2000 : 1000;

// Salary Calculation
const finalSalary = employee.salary + bonus;

// Console Methods
console.log("Employee Details Loaded Successfully");
console.warn("Please maintain regular attendance.");
console.error("Demo Error: Invalid login if credentials are incorrect.");

//------------------------------------------
// FINAL CONSOLE OUTPUT
// -----------------------------------------

console.log(`
==============================
      EMPLOYEE PORTAL
==============================

Employee Name : ${employee.name}

Employee ID   : ${employee.id}

Department    : ${employee.department}

Experience    : ${employee.experience} Years

Salary        : ₹${employee.salary}

Bonus         : ₹${bonus}

Final Salary  : ₹${finalSalary}

Skills        : ${skills.join(", ")}

Attendance    : ${employee.attendance}%

Exam Status   : ${examStatus}

Login Status  : ${loginStatus}

Company       : ${employee.company}

Location      : ${employee.location}

==============================
`);

