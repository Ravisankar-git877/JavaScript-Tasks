// Ask Employee Name
    let employeeName = prompt("Enter Employee Name:");

    // Ask Employee Age
    let employeeAge = prompt("Enter Employee Age:");

    // Ask to Join Company
    let joinCompany = confirm("Do you want to join our company?");

    // Ternary Operator 
    let message = joinCompany
        ? `Welcome ${employeeName}`
        : "Thank You";
    //show alert
    alert(message);

    // Show Result
    alert(message);
    // Print in Console
    console.log(`Employee Name : ${employeeName}`);
    console.log(`Employee Age  : ${employeeAge}`);
    console.log(`Message       : ${message}`);