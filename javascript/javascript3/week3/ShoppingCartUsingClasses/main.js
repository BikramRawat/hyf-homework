//Shopping Cart Homework js3/week3
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
    if (currency.toLowerCase().includes("dollar")) {
      return (this.price / 6.27).toFixed(2);
    } else if (currency.toLowerCase().includes("euro")) {
      return (this.price / 7.44).toFixed(2);
    } else if (currency.toLowerCase().includes("pound")) {
      return (this.price / 8.67).toFixed(2);
    } else {
      return this.price;
    }
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const deleteItem = this.products.filter(
      (item) => product.name !== item.name
    );
    this.products = deleteItem;
  }
  searchProduct() {
    const input = document.querySelector("#search-box").value;
    if (input) {
      const found = this.products.filter((item) => item.name === input);
      console.log(`Found item is ${found}`);
    } else {
      console.log("search product not found");
    }
  }

  getTotal() {
    const totalPrice = this.products.reduce((x, y) => x + y.price, 0);
    return totalPrice;
  }

  renderProducts() {
    this.products.forEach((item) => {
      const productDetails = document.createElement("li");
      productDetails.innerHTML = "Product Details: ";
      document.body.appendChild(productDetails);

      const productName = document.createElement("p");
      productName.innerHTML = `Product name: ${item.name}`;
      document.body.appendChild(productName);

      const price = document.createElement("p");
      price.innerHTML = `Price of the product: ${item.price}`;
      document.body.appendChild(price);
    });
  }

  getUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const userDiv = document.createElement("div");
        document.body.appendChild(userDiv);
        const userName = document.createElement("h4");
        userDiv.appendChild(userName);
        userName.innerHTML = `UserName: ${data.username}`;
        const name = document.createElement("h4");
        userDiv.appendChild(name);
        name.innerHTML = `Full name: ${data.name}`;
      })
      .then(() => {
        const totalPrice = document.createElement("h2");
        totalPrice.innerHTML = `Total price =  ${this.getTotal()}`;
        document.body.appendChild(totalPrice);
      });
  }
}

const shoppingCart = new ShoppingCart();
const search = document.querySelector("#search-btn");
search.addEventListener("click", shoppingCart.searchProduct());
const flatscreen = new Product("flat-screen", 5000);
const laptop = new Product("Mac Pro", 9000);
const computertable = new Product("computer table", 3500);
const computertable2 = new Product("computer table2", 4500);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(computertable);
shoppingCart.addProduct(computertable2);
shoppingCart.removeProduct(laptop);
shoppingCart.getUser();
shoppingCart.renderProducts();
// shoppingCart.searchProduct();
const plant = new Product("plant", 50);
console.log(
  "The price of plant in dollars: $",
  plant.convertToCurrency("dollars")
);
const car = new Product("Car", 350000);
console.log("The price of car in euro: €", car.convertToCurrency("euro"));
const iphone = new Product("I phone", 9000);
console.log(
  "The price of i-phone in pound: £",
  iphone.convertToCurrency("pound")
);
