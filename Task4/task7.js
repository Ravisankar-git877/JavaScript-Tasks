function prepareFood(callback) {
    console.log("Order Received");

    callback();
}

function deliverFood() {
    console.log("Food Preparing");
    console.log("Food Delivered");
}

prepareFood(deliverFood);