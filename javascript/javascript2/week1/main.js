console.log('Script loaded');

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
	const body = document.querySelector('body');
	const ul = document.createElement('ul');
	body.appendChild(ul);

	for (let i =0;i < products.length; i++) {
		const li = document.createElement('li');
		const title = document.createElement('h3');
		title.innerHTML = `The name of the product is: ${products[i].name} `;
		li.appendChild(title);

		const price = document.createElement('p');
		price.innerHTML = `The price is: ${products[i].price}`;
		li.appendChild(price);

		const rating = document.createElement('p');
		rating.innerHTML = `The product rating is : ${products[i].rating}`;
		li.appendChild(rating);

		ul.appendChild(li);
	}
}
renderProducts(products);