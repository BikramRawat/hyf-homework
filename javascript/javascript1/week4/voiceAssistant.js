let myName = "";
const toDoList = [];

function getReply(command) {

    command = command.toLowerCase();
    
    if (command.includes("my name is")){
        const start = command.indexOf("is");
        const name = command.substring(start + 2).trim();
        if (!name){
            console.log('Please enter your name')
            myName = prompt('What is your name?')
            return `Nice to meet you ${myName}`;
        } 

        else{
            myName = name
            return `Nice to meet you ${myName}`;
        }
    } 
    else if (command.includes("what is my name")){
        return `Your name is ${myName}`;
    } 
    else if (command.includes("to my todo")){
        const start = command.indexOf("add");
        const end = command.indexOf("to my todo");
        const toDoItem = command.substring(start + 4, end - 1);
        toDoList.push(toDoItem);
        return `${toDoItem} added to your todo`;
    } 
    else if (command.includes("from my todo")){
        const begin = command.indexOf("remove")
        const last = command.indexOf("from my todo");
        const toDoItem = command.substring(begin + 7, last - 1);
        const index = toDoList.indexOf(toDoItem);
        if (index !== -1){
            toDoList.splice(index, 1);
            return `${toDoItem} removed from your todo`;
        } 
        else{
            return `${toDoItem} is not in your todo`;
        }
    } 
    else if (command.includes("what is on my todo")){
        let listOfItem = "";
        for (let i = 0; i < toDoList.length; i++){
            if (i === 0){
            listOfItem = toDoList[i];
            } 
            else if (i === toDoList.length - 1){
            listOfItem = `${listOfItem}  and ${toDoList[i]}`;
            } 
            else{
            listOfItem = `${listOfItem} , ${toDoList[i]}`;
        }
    }
    return `you have ${toDoList.length} todo's - ${listOfItem}`;
    } 
    else if (command.includes("what day is it today")){
        const today = new Date();
        const dateArr = today.toString().split(" ");
        return `${dateArr[2]}. of ${dateArr[1]} ${dateArr[3]}`;
    }
    else if (command.includes("what is")){
        //const array = command.split(" "); 
        const [ , , number1, operator, number2] = command.split(' ');
        if (operator === '+'){
            return number1 + number2;
        }
        else if (operator === "*"){
            return number1 * number2;
        } 
        else if (operator === "/"){
            return number1 / number2;
        } 
        else if (operator === "-"){
            return number1 - number2;
        }
        /*
        const num1 = parseInt(array[2]);
        const num2 = parseInt(array[4]);
        if (array[3] === "+"){
            return num1 + num2;
        } 
        else if (array[3] === "*"){
            return num1 * num2;
        } 
        else if (array[3] === "/"){
            return num1 / num2;
        } 
        else if (array[3] === "-"){
            return num1 - num2;
        }
        */
    }
    else if (command.includes("set a timer for ")){
        const array = command.split(" ");   
        let timer = 0;
        if (array[array.length - 1].includes("sec")){
            timer = array[array.length - 2] * 1000;
        }    
        else if (array[array.length - 1].includes("min")){
            timer = array[array.length - 2] * 60000;
        } 
        else if (array[array.length - 1].includes("hour")){
            timer = array[array.length - 2] * 360000;
        }
    setTimeout(function () {
        alert("Timer OFF!")
    }, timer);
    return `Timer set for ${array[array.length-2]} ${array[array.length-1]}`;
    }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Hello my name is"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in shower to my todo"));
console.log(getReply("Add doctors appointment to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 4 + 3 "));
console.log(getReply("what is 3 * 3"));
console.log(getReply("what is 12 / 4"));
console.log(getReply("what is 23 - 12"));
console.log(getReply("set a timer for 4 minutes"));