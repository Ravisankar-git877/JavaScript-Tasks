const foodItems = [
  "Pizza",
  "Burger",
  "Biryani",
  "Dosa",
  "Pasta",
  "Noodles",
  "Sandwich",
  "Ice Cream"
];

console.log("First Item:", foodItems[0]);
console.log("Last Item:", foodItems[foodItems.length - 1]);
console.log("Total Items:", foodItems.length);

console.log("Food Items:");
for (let item of foodItems) {
  console.log(item);
}

