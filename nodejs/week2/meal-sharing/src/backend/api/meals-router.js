const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

// server response to send all meals on http://localhost:portNumber/api/meals
router.get("/", async (request, response) => {
    try {
        console.log("in /api/meals");
        const query = request.query;
        if(query.maxPrice){

          // http://localhost:port/api/meals?maxPrice=query_max_price
          response.send(meals.filter(meal => meal.price <= query.maxPrice));
        } else if (query.title) {

          // http://localhost:port/api/meals?title=query_title_words
          response.send(meals.filter(meal => meal.title.toLowerCase().includes(query.title)));
        } else if (query.createdAfter){

          // http://localhost:port/api/meals?createdAfter=query_date
          response.send(meals.filter(meal => new Date(meal.createdAt) > new Date(query.createdAfter)));
        } else if (query.limit){

          // http://localhost:port/api/meals?limit=query_limit
          response.send(meals.slice(0,query.limit));
        } else {
          // http://localhost:port/api/meals
          response.send(meals);
        }
    } catch (error) {
      response.status(400);
      response.send('Test failed', error);
    }
});

// server response to send requested meal on http://localhost:portNumber/api/meals/meal_id
router.get("/:id", async (request, response) => {
    const requestedMealId = parseInt(request.params.id);
    try {
        if (requestedMealId) {
            response.send(meals.filter(meal => meal.id === requestedMealId));
        } else {
          // in case the id is not given as a number
          response.end('No such id found in the meal sharing database');
        }
    }
    catch (error) {
      response.status(400);
      response.send('Test failed', error);
    }
});

module.exports = router; 

//logical questions for error handling
// What if there is no meal with the requested id in meals.json?

// What if the users writes a string as id? fx "/api/meals/lol"

// What if the users writes a query parameter that is not supported?