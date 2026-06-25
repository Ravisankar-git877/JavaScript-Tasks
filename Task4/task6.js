let balance = Number(prompt("Enter Balance:"));
let withdraw = Number(prompt("Enter Withdrawal Amount:"));

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Insufficient Balance");
}