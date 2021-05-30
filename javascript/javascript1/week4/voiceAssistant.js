let myName = "";
const toDoList = [];

function getReply(command) 
{
    let x = command.toLowerCase();
    const start = x.indexOf("is");
    const name = x.substring(start + 2).trim();
if (x.includes("my name is")) 
{
    if (name == "") 
    {
        console.log('Please enter your name')
        myName = prompt('What is your name?')
        return `Nice to meet you ${myName}`;
    } 
    else {
    myName = name
    return `Nice to meet you ${myName}`;
    }
} 
else if (x.includes("what is my name")) 
{
    return `Your name is ${myName}`;
} 
else if (x.includes("to my todo")) 
{
    const start = x.indexOf("add");
    const end = x.indexOf("to my todo");
    const toDoItem = x.substring(start + 4, end - 1);
    toDoList.push(toDoItem);
    return `${toDoItem} added to your todo`;

} 
else if (x.includes("from my todo"))
{
    const begin = x.indexOf("remove")
    const last = x.indexOf("from my todo");
    const toDoItem = x.substring(begin + 7, last - 1);
    const index = toDoList.indexOf(toDoItem);
    if (index !== -1) 
    {
        toDoList.splice(index, 1);
        return `${toDoItem} removed from your todo`;
    } 
    else
    {
        return `${toDoItem} is not in your todo`;
    }
} 
else if (x.includes("what is on my todo"))
{
    let listOfItem = "";
    for (let i = 0; i < toDoList.length; i++) 
    {
        if (i === 0) {
            listOfItem = toDoList[i];
        } 
        else if (i === toDoList.length - 1)
        {
            listOfItem = `${listOfItem}  and ${toDoList[i]}`;
        } 
        else 
        {
            listOfItem = `${listOfItem} , ${toDoList[i]}`;
        }
    }
    return `you have ${toDoList.length} todo's - ${listOfItem}`;
} 
else if (x.includes("what day is it today"))
{
    const today = new Date();
    const dateArr = today.toString().split(" ");
    return `${dateArr[2]}. of ${dateArr[1]} ${dateArr[3]}`;
}
else if (x.includes("what is")) 
{
    const arr = x.split(" ");
    const num1 = parseInt(arr[2]);
    const num2 = parseInt(arr[4]);
    if (arr[3] === "+") 
    {
        return num1 + num2;
    } 
    else if (arr[3] === "*") 
    {
        return num1 * num2;
    } 
    else if (arr[3] === "/") 
    {
        return num1 / num2;
    } 
    else if (arr[3] === "-") 
    {
        return num1 - num2;
    }
}
else if (x.includes("set a timer for ")) 
{
    const arr = x.split(" ");
    let timer = 0;
    if (arr[arr.length - 1].includes("sec")) 
    {
        timer = arr[arr.length - 2] * 1000;
    } 
    else if (arr[arr.length - 1].includes("min")) {
        timer = arr[arr.length - 2] * 60000;
    } 
    else if (arr[arr.length - 1].includes("hour")) {
        timer = arr[arr.length - 2] * 360000;
    }
    setTimeout(function () {
        alert("Timer OFF!")
    }, timer);
    return `Timer set for ${arr[arr.length-2]} ${arr[arr.length-1]}`;
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
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 3 * 3"));
console.log(getReply("what is 12 / 4"));
console.log(getReply("what is 23 - 12"));
console.log(getReply("set a timer for 4 minutes"));