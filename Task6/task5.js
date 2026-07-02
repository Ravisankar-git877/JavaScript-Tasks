let employees = [
    {
        name: "Ravisankar",
        experience: 2
    },
    {
        name: "subbu",
        experience: 7
    },
    {
        name: "Aruna",
        experience: 5
    }
];

let newArray = employees.map((c, i, t) => {
    return c.name;
});

newArray.forEach((c, i, t) => {
    console.log(c);
});