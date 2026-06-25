let employees = [
    {
        name: "Ravisankar",
        id: 369,
        salary: 30000
    },
    {
        name: "subbu",
        id: 370,
        salary: 60000
    }
];

for (let emp of employees) {

    console.log("Employee Name:", emp.name);
    console.log("Employee ID:", emp.id);
    console.log("Employee Salary:", emp.salary);

    if (emp.salary >= 50000) {
        console.log("Employee Eligible For Bonus");
    } else {
        console.log("Employee Not Eligible For Bonus");
    }

    console.log("------------------------");
}