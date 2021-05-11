const amountOfPizza = prompt("How many pizaas you want to order?");
const familySizePizza = confirm("Do you like to order family size pizza ? if yes click ok else click cancel : ");
const pizzaPrice = 60;
const nameOfPizza = prompt("Enter the name of the pizza ?");
let totalPrice = amountOfPizza * pizzaPrice;
if (familySizePizza) {
    const doublePizzaPrice = pizzaPrice * 2;
    totalPrice = amountOfPizza * doublePizzaPrice;
    console.log(`The price of pizza is double: $${doublePizzaPrice}`);
}

console.log(`New pizza order: ${amountOfPizza} pizzas, the name of pizza is: ${nameOfPizza}`);
console.log(`Total cost for the order is: $${totalPrice}`);
