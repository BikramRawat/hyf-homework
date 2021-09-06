const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

// server response to send all reservations on http://localhost:portNumber/api/reservations
router.get("/", async (request, response) => {
    try {
        console.log("in /api/reservations");
        response.send(reservations);
    } catch (error) {
        throw error;
    }
});

// server response to send requested reservation on http://localhost:portNumber/api/reservations/reservaton_id
router.get("/:id", async (request, response) => {
    const requestedReservationId = parseInt(request.params.id);
    try {
        if (requestedReservationId) {
            response.send(reservations.filter(reservation => reservation.id === requestedReservationId));
        }
    }
    catch (error) {
        throw error;
    }
});

module.exports = router; 