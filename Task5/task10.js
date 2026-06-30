let employeePersonal = {
    name: "Ravisankar",
    age: 23,
    city: "Andhra Pardesh"
};

let employeeOffice = {
    id: 101,
    department: "Development",
    salary: 50000
};

let employee = {...employeePersonal,...employeeOffice};
console.log(employee);