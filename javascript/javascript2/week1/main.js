console.log('Script loaded');

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
	const body = document.querySelector('body');
	const unOrderedList = document.createElement('ul');
	body.appendChild(unOrderedList);

	for (let i =0;i < products.length; i++) {
		const listItem = document.createElement('li');
		const title = document.createElement('h3');
		title.innerHTML = `The name of the product is: ${products[i].name} `;
		listItem.appendChild(title);

		const price = document.createElement('p');
		price.innerHTML = `The price is: ${products[i].price}`;
		listItem.appendChild(price);

		const rating = document.createElement('p');
		rating.innerHTML = `The product rating is : ${products[i].rating}`;
		listItem.appendChild(rating);

		unOrderedList.appendChild(listItem);
	}
}
renderProducts(products);