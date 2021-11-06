// Homework nodejs/week3 warmup section

const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => res.send("Welcome to Nodejs week3 warmup homework"));

// Multiplication
// http://localhost:3000/calculator/multiply?firstParam=2&secondParam=4&thirdParam=5
// response: Multiplication of given numbers = 40
app.get('/calculator/multiply', (request, response) => {
    const queryParam = request.query;
    let result = 1;
    for (const parameter in queryParam){
        if(isNaN(queryParam[parameter])){
            return response.status(406).send('Unacceptable Input Parameter, Plz give numbers 😊');
        }
        result = result * Number(queryParam[parameter]);
    }
    response.send(`Multiplication of given numbers = ${result}`);
})

// Addition
app.get('/calculator/add', (request, response) => {
    const queryParam = request.query;
    let result = 0;
    for (const parameter in queryParam){
        if(isNaN(queryParam[parameter])){
            return response.status(406).send('Unacceptable Input Parameter, Plz give numbers 😊');
        }
        result = result + Number(queryParam[parameter]);
    }
    response.send(`The sum of given numbers = ${result}`);
})

// Getting data through the request body i.e request.body using POST (hint: use postman)
app.post('/calculator/multiply', (request, response) => {
    const firstParam = request.body.firstParam;
    const secondParam = request.body.secondParam;
        if(isNaN(firstParam) || isNaN(secondParam)) {
            return response.status(406).send('Unacceptable Input Parameter, Plz give numbers 😊');
        }
        const result = firstParam * secondParam;
    response.send(`The Multiplication of given numbers = ${result}`);
})

app.post('/calculator/division', (request, response) => {
    const firstParam = request.body.firstParam;
    const secondParam = request.body.secondParam;
        if(isNaN(firstParam) || isNaN(secondParam)) {
            return response.status(406).send('Unacceptable Input Parameter, Plz give numbers 😊');
        }
        const result = firstParam / secondParam;
    response.send(`The division of given numbers = ${result}`);
})

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
