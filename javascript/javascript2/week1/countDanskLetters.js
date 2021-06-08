const countDanskLetters = danskString => {
	const count_æ = (danskString.match(/æ/gi) || []).length;
    const count_ø = (danskString.match(/ø/gi) || []).length;
    const count_å = (danskString.match(/å/gi) || []).length;
    const total = count_æ + count_ø + count_å ;
    return `Total dansk letters: ${total}, æ : ${count_æ}, ø : ${count_ø}, and å : ${count_å}`;
}
const danishString1 = 'Jeg har en blå bil';
const danishString2 = 'Blå grød med røde bær';
const danishString3 = 'Ål hælpåååå ØveøØØØØØ';
const danishString4 = 'Hello how are you ?';
const danishString5 = prompt('Enter any sentence :');


console.log(danishString1);
console.log(countDanskLetters(danishString1));

console.log(danishString2);
console.log(countDanskLetters(danishString2));

console.log(danishString3);
console.log(countDanskLetters(danishString3));

console.log(danishString4);
console.log(countDanskLetters(danishString4));

console.log(danishString5);
console.log(countDanskLetters(danishString5));
