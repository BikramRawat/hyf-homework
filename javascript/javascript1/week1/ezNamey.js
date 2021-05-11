const firstWords = ["trusty", "energetic", "obedient", "helpful", "dynamic", "dedicated", "encouraging", "openminded", "good", "punctual"];
const secondWords = ["company", "corporation", "trade union", "trustworthy","popular", "fascinating", "powerful", "cheapest", "expensive","amazing"];
const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const startUpName =(`${firstWords[randomNumber1]} ${secondWords[randomNumber2]}`);
console.log(`nezNamey : The startup Name generator app :)`)
console.log(`The startup : "${startUpName}" :- contains ${startUpName.length} characters.`);

