const amountOfPizza = prompt("How many pizaas you want to order?");
const familySizePizza = confirm("Do you like to order family size pizza ? if yes click ok else click cancel : ");
const pizzaPrice = 60;
const nameOfPizza = prompt("Enter the name of the pizza ?");
let totalPrice = amountOfPizza * pizzaPrice;
if(familySizePizza){
    doublePrice = pizzaPrice * 2;
    console.log(`The price of pizaa is double: $${doublePrice}`);
    console.log(`New pizza order: ${amountOfPizza} pizzas, the name of pizza is : ${nameOfPizza} `);
    totalNewPrice = doublePrice * amountOfPizza;
    console.log(`Total cost for the order is : $${totalNewPrice}`);
}
else {
    console.log(`New pizza order: ${amountOfPizza} pizzas, the name of pizza is : ${nameOfPizza} `);
    console.log(`Total cost for the order is : $${totalPrice}`);
}
