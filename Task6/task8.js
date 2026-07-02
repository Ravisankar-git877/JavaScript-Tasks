let employees = [
    {
        name: "Ravisankar",
        id: 101,
        salary: 30000
    },
    {
        name: "syam",
        id: 102,
        salary: 60000
    },
    {
        name: "Aruna",
        id: 103,
        salary: 45000
    }
];

let newArray = employees.filter((c, i, t) => {
    return c.salary > 40000;
});

newArray.forEach((c, i, t) => {
    console.log(c.name);
});