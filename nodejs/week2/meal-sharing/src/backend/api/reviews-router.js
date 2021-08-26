const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

// server response to send all reviews on http://localhost:portNumber/api/reviews
router.get("/", async (request, response) => {
    try {
        console.log("in /api/reviews");
        response.send(reviews);
    } catch (error) {
        throw error;
    }
});

// server response to send requested review on http://localhost:portNumber/api/reviews/review_id
router.get("/:id", async (request, response) => {
    const requestedReviewId = parseInt(request.params.id);
    try {
        if (requestedReviewId) {
            response.send(reviews.filter(review => review.id === requestedReviewId));
        }
    }
    catch (error) {
        throw error;
    }
});

module.exports = router;