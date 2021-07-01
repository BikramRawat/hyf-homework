//1. Create an array with 3 items. All items should be functions.
//Iterate through the array and call all the functions.

const func1 = ()=> {console.log('Its a function ONE')};
const func2 = ()=> {console.log('Its a function TWO')};
const func3 = ()=> {console.log('Its a function THREE')};
const arrayOfFunctions = [func1,func2,func3];
arrayOfFunctions.forEach(funcN => funcN());

//2. Create a function as a const and try creating a function normally. 
//Call both functions.

//functionAsVariable();
//if we call the function expression before its declared, it cause an uncaught reference error 
// its because function expressions load only when the interpreter reaches that lin eof code
normalFunction(); 
// here no error since its a normal function, for normal function first the declarations are loaded and then only it can be called
const functionAsVariable = function(){
    console.log('Its a function declaration as variable');
}
function normalFunction(){
    console.log('Its a normal function');
}
functionAsVariable(); // no error here since function expression is declared already
// normalFunction(); // no error 
//so for the function expressions we have to call only after they are declared

//3. Create an object that has a key whose value is a function. 
//Try calling this function.

// I tried to google this but i could not understand it 
// can you help me please ? 😊👍







