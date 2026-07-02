let employees = [
    {
        name: "Krishna",
        experience: 2
    },
    {
        name: "Ram",
        experience: 7
    },
    {
        name: "Shiva",
        experience: 5
    }
];

let newArray = employees.map((c, i, t) => {

    if (c.experience >= 5) {
        return c.name + " - Senior Employee";
    } else {
        return c.name + " - Junior Employee";
    }

});

newArray.forEach((c, i, t) => {
    console.log(c);
});