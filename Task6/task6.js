let employees = [
    {
        name: "Ravisankar",
        id: 101
    },
    {
        name: "syam",
        id: 102
    },
    {
        name: "Adi",
        id: 103
    }
];

let newArray = employees.map((c, i, t) => {
    return c.id;
});

newArray.forEach((c, i, t) => {
    console.log(c);
});