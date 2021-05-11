const yearOfBirth = prompt("Enter year of Birth: ");
const yearFuture = prompt("Enter the future year when you want your age?");
const age = yearFuture - yearOfBirth;
console.log("Age-ify (A future age calculator):-");
console.log("Your year of birth is :" + " " + yearOfBirth + " " + "AD");
console.log("The year you want your age to be is : "+ " " + yearFuture + " " + "AD");
console.log(`You will be: ${age} years old in: ${yearFuture} AD`);
