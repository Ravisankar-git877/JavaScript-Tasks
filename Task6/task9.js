let employees = [
    {
        name: "Ravisankar",
        salary: 30000
    },
    {
        name: "Rishi",
        salary: 60000
    },
    {
        name: "Dhanush",
        salary: 40000
    }
];

let bonus = 5000;

let newArray = employees.map((c, i, t) => {
    return c.name + " : " + (c.salary + bonus);
});

newArray.forEach((c, i, t) => {
    console.log(c);
});