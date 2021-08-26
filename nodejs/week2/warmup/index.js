const express = require("express");
const app = express();

app.get("/", (request, response) => response.send("nodejs week2 homework"));

// server response for addition of given two numbers
// http://localhost:port/numbers/add?firstNumber=<number here>&secondNumber=<number here>
app.get("/numbers/add", (request, response) => {
    const query = request.query;
    response.send(`Sum of given two numbers: ${query.firstNumber} and ${query.secondNumber} is = ${parseInt(query.firstNumber) + parseInt(query.secondNumber)}`);
})

// server response for multiplication of given two numbers
// http://localhost:port/numbers/multiply?firstNumber=<number here>&secondNumber=<number here>
app.get("/numbers/multiply", (request, response) => {
    const query = request.query;
    response.send(`Multiplication of given two numbers: ${query.firstNumber} and ${query.secondNumber} is = ${parseInt(query.firstNumber) * parseInt(query.secondNumber)}`);
})

app.listen(3000, () => console.log(`Calculator: Server is listening at:  http://localhost:3000`));
