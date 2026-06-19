// =====================================
// ATM SYSTEM
// =====================================

// Variables
var customerName = prompt("Enter Your Name:");
let accountBalance = 50000;
const bankName = "IDFC FIRST Bank";

// Account Object
const account = {
  accountNumber: "1234567890",
  accountType: "Savings",
  branch: "Chirala"
};

// Services Array
const services = ["Withdraw", "Deposit", "Balance Enquiry", "Mini Statement"];

// Alert
alert(`Welcome to ${bankName} ATM`);

// Confirm
let proceed = confirm("Do you want to continue?");

// Prompt for withdrawal amount
let withdrawAmount = Number(prompt("Enter Withdrawal Amount:"));

// Balance Check using Ternary Operator
let transactionStatus =
  proceed && withdrawAmount <= accountBalance
    ? "Transaction Successful"
    : "Transaction Failed";

// Cash Deduction using Ternary Operator
let remainingBalance =
  proceed && withdrawAmount <= accountBalance
    ? accountBalance - withdrawAmount
    : accountBalance;

// Console Methods
console.log("ATM transaction initiated.");
console.warn("Please collect your cash and card.");
console.error("Transaction will fail if the amount exceeds your balance.");

// Final Output
console.log(`
==============================
         ATM SYSTEM
==============================

Customer Name   : ${customerName}

Bank Name       : ${bankName}

Account Number  : ${account.accountNumber}

Account Type    : ${account.accountType}

Branch          : ${account.branch}

Available Services : ${services.join(", ")}

Current Balance : ₹${accountBalance}

Withdrawal Amt  : ₹${withdrawAmount}

Status          : ${transactionStatus}

Remaining Bal.  : ₹${remainingBalance}

==============================
`);
