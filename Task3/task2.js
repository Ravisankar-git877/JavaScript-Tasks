let productName = prompt("Enter Product Name:");
let productPrice = Number(prompt("Enter Product Price:"));
let quantity = Number(prompt("Enter Quantity:"));

let totalBill = productPrice * quantity;
let finalAmount;

if (totalBill > 5000) {
    let discount = totalBill * 0.10; 
    finalAmount = totalBill - discount;
    console.log("10% Discount Applied");
} else {
    finalAmount = totalBill;
    console.log("No Discount Applied");
}
console.log("Product Name:", productName);
console.log("Product Price:", productPrice);
console.log("Quantity:", quantity);
console.log("Total Bill:", totalBill);
console.log("Final Amount:", finalAmount);