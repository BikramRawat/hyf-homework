// const { request, response } = require("express");
const express = require("express");
// const { reset } = require("nodemon");
const router = express.Router();
const knex = require("../database");

// selecting all the concerts 
router.get("/", async (request, response) => {
  try {
    const concerts = await knex("concerts");
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});

// Exercise part : 1 : creating different routes

//insert the values in the table
router.post("/", async (request, response) => {
 console.log('post: request');
 // here knex library connects with the mysql database
 const insertedConcert = await knex('concerts').insert([
  {
  "id": 1,
  "title": "Nepali cultural performance",
  "band": "Himalayas",
  "venue": "Ryparken",
  "created_date": "2020-02-12T18:43:07.000Z",
  "performance_date": "2021-09-01T13:06:08.000Z",
  "price": 1300
  },
  {
  "id": 2,
  "title": "Beyonce in Royal Arena",
  "band": "Beyonce",
  "venue": "Royal Arena",
  "created_date": "2021-02-12T18:43:07.000Z",
  "performance_date": "2021-09-01T13:08:06.000Z",
  "price": 1000
  },
  {
  "id": 3,
  "title": "Phish at Woodstock",
  "band": "Phish",
  "venue": "Woodstock",
  "created_date": "1965-02-12T18:43:07.000Z",
  "performance_date": "1965-02-12T18:43:07.000Z",
  "price": 600
  },
  {
  "id": 4,
  "title": "Metallica in Parken",
  "band": "Metallica",
  "venue": "Parken",
  "created_date": "2021-02-12T18:43:07.000Z",
  "performance_date": "2021-09-01T13:10:53.000Z",
  "price": 200
  }
  ]
 )
 // after inserting data into the table , now goto postman app and see after sending post request with the given id
 response.json(insertedConcert);
});

// select any concert with any key fx. id
router.get("/:id", async (request, response) => {
  try {
    const concertWithId = await knex("concerts")
    .select () // select all that belongs to the requested id
    .where('id', Number(request.params.id));
    response.json(concertWithId);
  } catch (error) {
    throw error;
  }
});

// Update concerts data related to the given key fx.  id 
router.put("/:id", async (request, response) => {
  try {
    const updateConcert = await knex("concerts")
    // .update({price: 1111})
    // giving the values from postman to update , first give the id you want to update, then give the key and value pairs
    //  by selecting body, x-www-from-encoded and then send the request, to check again send the get request
    .update(request.body)
    .where('id', parseInt(request.params.id))

    response.json(updateConcert);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const deleteConcert = await knex("concerts")
    .delete()
    .where('id', parseInt(request.params.id))
  
    response.json(deleteConcert);
  } catch (error) {
    // if client request for a NAN as id
    response.status(400).send('Invalid request, give the proper request' + error);
  }
});

// Exercise part:2 , Query parameters
// 1 Get concerts that has a price smaller than maxPrice
router.get('/', async(request,response)=> {
  try{
    const query = request.query;
    console.log(query);
    if(query.maxPrice && !(isNAN(Number(query.maxPrice)))){
      await knex('concerts')
      .where('price', '<=', Number(query.maxPrice))
      .then(rows => {
        response.json(rows)
      });
    }
    // 2 Get concerts that partially match a title. Metallic will match the concert with the title Metallica in Parken
    else if (query.title && typeof query.title === 'string'){
      await knex('concerts')
      .where('title', 'like', `%${query.title}%`)
      .then (rows => response.json(rows));
    } 
    // 3 Get concerts that has been created after the date
    else if (query.createdAfter && !isNaN(Date.parse(query.createdAfter))){
      await knex('concerts')
      .where('created_date', '>', '2019-04-05')
      .then(rows => response.json(rows));
    } 
    // 4 Get concerts with a specific band
    else if (request.band && typeof query.band === 'string'){
      await knex("concerts").where('band', 'like', `%${query.band}%`)
      .then(rows => response.json(rows));
    } else {
      response.json(concerts);
    }
    } catch(error){
    throw error;
  }
});

module.exports = router;
