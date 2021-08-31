const express = require("express");
const app = express();

app.get("/", (request, response) => response.send("nodejs week2 homework"));

// server response for addition of given two numbers using request.query
// http://localhost:port/numbers/add?firstNumber=<number here>&secondNumber=<number here>
app.get("/numbers/add", (request, response) => {
    const query = request.query;
    response.send(`Sum of given two numbers: ${query.firstNumber} and ${query.secondNumber} is = ${parseInt(query.firstNumber) + parseInt(query.secondNumber)}`);
})

// server response for multiplication of given two numbers using request.params
// http://localhost:port/numbers/multiply/<first number here>/<second number here>
// fx: http://localhost:3000/numbers/multiply/200/5 
// server response is : Multiplication of given two numbers: 200 and 5 is = 1000

app.get("/numbers/multiply/:firstNumber/:secondNumber", (request, response) => {
    const firstNumber = parseInt(request.params.firstNumber);
    const secondNumber = parseInt(request.params.secondNumber);
    response.send(`Multiplication of given two numbers: ${firstNumber} and ${secondNumber} is = ${firstNumber * secondNumber}`);
})

app.listen(3000, () => console.log(`Calculator: Server is listening at:  http://localhost:3000`));
