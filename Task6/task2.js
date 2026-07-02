let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];

let searchId = 103;

let employee = employees.find((currentEmployee, index, totalArray) => {
    return currentEmployee.id === searchId;
});

if (employee) {
    console.log("Employee Found");
    console.log("Name :", employee.name);
    console.log("Salary :", employee.salary);
} else {
    console.log("Employee Not Found");
}