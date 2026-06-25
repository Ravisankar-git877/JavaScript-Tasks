let products = [
    { name: "Laptop", price: 100000 },
    { name: "Mouse", price: 1000 },
    { name: "Mobile", price: 50000 }
];

function calculateBill(items) {
    let total = 0;

    for (let product of items) {
        total += product.price;
    }

    if (total > 5000) {
        total = total - (total * 0.10);
        console.log("10% Discount Applied");
    }

    console.log("Final Bill: ₹" + total);
}

calculateBill(products);