let employees = [
    {
        name: "Ravisankar",
        id: 101,
        salary: 30000
    },
    {
        name: "subbu",
        id: 102,
        salary: 60000
    },
    {
        name: "Aruna",
        id: 103,
        salary: 45000
    }
];

employees.forEach((c, i, t) => {
    console.log(`Employee Name : ${c.name}`);
    console.log(`Employee ID : ${c.id}`);
    console.log(`Salary : ${c.salary}`);
});