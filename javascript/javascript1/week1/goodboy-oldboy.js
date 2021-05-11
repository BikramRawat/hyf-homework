const dogYearOfBirth = prompt("Enter the birthyear of the dog : ");
const dogYearFuture = prompt("Enter the future year you want to be for the dog ?");
const dogYear = dogYearFuture - dogYearOfBirth;
//let shouldShowResultInDogYears = false;
const shouldShowResultInDogYears = confirm("Shoud result show in dog years ?\n hint: if yes?click Ok else click calcel:");
console.log("Goodboy-Oldboy (A dog age calculator):- ");
console.log(`Dog year of birth is : ${dogYearOfBirth} AD`);
console.log(`Dog year future you want in is :${dogYearFuture} AD`);
/*if(!shouldShowResultInDogYears){
    console.log(`Your dog will be ${dogYear*7} dog years old in ${dogYearFuture} AD`);
}
else {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture} AD`);
}*/
if(shouldShowResultInDogYears){
    console.log(`Your dog will be ${dogYear*7} dog years old in ${dogYearFuture} AD`)
}
    else{
        console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture} AD`);
    }
