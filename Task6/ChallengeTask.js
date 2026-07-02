let employees = [
    {
        name: "Ravisankar",
        id: 101,
        salary: 30000
    },
    {
        name: "Aruna",
        id: 102,
        salary: 60000
    },
    {
        name: "subbu",
        id: 103,
        salary: 45000
    }
];

// 1. Total number of employees
console.log("Total Employees :", employees.length);

// 2. Highest salary
let highestSalary = employees.reduce((c, i) => {
    return i.salary > c ? i.salary : c;
}, 0);

console.log("Highest Salary :", highestSalary);

// 3. Lowest salary
let lowestSalary = employees.reduce((c, i) => {
    return i.salary < c ? i.salary : c;
}, employees[0].salary);

console.log("Lowest Salary :", lowestSalary);

// 4. Total salary of all employees
let totalSalary = employees.reduce((c, i) => {
    return c + i.salary;
}, 0);

console.log("Total Salary :", totalSalary);

// 5. Employee earning highest salary
let highestEmployee = employees.find((c, i, t) => {
    return c.salary === highestSalary;
});

console.log("Highest Salary Employee :", highestEmployee.name);

// 6. Employee earning lowest salary
let lowestEmployee = employees.find((c, i, t) => {
    return c.salary === lowestSalary;
});

console.log("Lowest Salary Employee :", lowestEmployee.name);

// 7. Employees earning more than 40000
console.log("Employees Salary > 40000");

employees
    .filter((c, i, t) => c.salary > 40000)
    .forEach((c, i, t) => console.log(c.name));

// 8. Search employee by ID
let searchId = 102;

let employee = employees.find((c, i, t) => {
    return c.id === searchId;
});

if (employee) {
    console.log("Employee Found :", employee.name);
} else {
    console.log("Employee Not Found");
}

// 9. Add ₹5000 bonus
let bonus = 5000;

let newSalary = employees.map((c, i, t) => {
    return c.name + " : " + (c.salary + bonus);
});

console.log("Salary After Bonus");

newSalary.forEach((c, i, t) => {
    console.log(c);
});

// 10. Professional Employee Report
console.log("\nEmployee Report");

employees.forEach((c, i, t) => {
    console.log(`Employee Name : ${c.name}`);
    console.log(`Employee ID : ${c.id}`);
    console.log(`Salary : ${c.salary}`);
    console.log("----------------------");
});