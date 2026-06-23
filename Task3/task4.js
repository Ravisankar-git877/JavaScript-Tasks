// ======================================
// Task 4: Bank ATM Eligibility
// ======================================

let userName = prompt("Enter User Name:");
let balance = Number(prompt("Enter Account Balance:"));
let withdrawal = Number(prompt("Enter Withdrawal Amount:"));

if (withdrawal <= balance) {
  console.log("Transaction Successful");
} else {
  console.log("Insufficient Balance");
}