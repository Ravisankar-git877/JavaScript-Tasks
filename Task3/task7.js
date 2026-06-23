const employeeDirectory = {
  name: "Ravisankar",
  age: 23,
  department: "Development",
  salary: 50000,
  experience: "2 Years"
};

for (let key in employeeDirectory) {
  console.log(key + " : " + employeeDirectory[key]);
}

