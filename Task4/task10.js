let employees = [];

function addEmployee(name, id, salary) {
    employees.push({ name, id, salary });
}

function viewEmployees() {
    console.log(employees);
}

function calculateBonus() {
    employees.forEach(emp => {
        if (emp.salary >= 50000) {
            console.log(emp.name + " Eligible For Bonus");
        } else {
            console.log(emp.name + " Not Eligible For Bonus");
        }
    });
}

function searchEmployee(id) {
    let emp = employees.find(e => e.id === id);
    console.log(emp || "Employee Not Found");
}

function deleteEmployee(id) {
    employees = employees.filter(e => e.id !== id);
    console.log("Employee Deleted");
}

function totalEmployees() {
    console.log("Total Employees:", employees.length);
}

addEmployee("Ravisankar", 101, 30000);
addEmployee("subbu", 102, 60000);

viewEmployees();
calculateBonus();
searchEmployee(102);
deleteEmployee();
totalEmployees();