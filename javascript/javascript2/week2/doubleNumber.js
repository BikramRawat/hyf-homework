
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 45, 23, 99, 100];

//const oddNumbers = numbers.filter(number => number % 2 !== 0);
//const doubledNumbers = oddNumbers.map(number => number * 2);
//With combining the two methods filter and map we can re-write it as below line no. 8

const doubledNumbers = numbers.filter(number => number % 2 !== 0).map(number => number * 2);

//console.log(`The odd numbers are : ${oddNumbers}`);

//console.log('The doubled numbers are :', doubledNumbers); // without using the ...spread operator
//console.log('The doubled numbers are :', ...doubledNumbers); // I added this line just to test the ...spread operator
console.log(`The doubled numbers are : ${doubledNumbers} `); // with template literal 

