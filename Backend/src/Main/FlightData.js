// backend/flightRoutes.js
const express = require('express');
const axios = require('axios');

const router = express.Router();

const API_KEY = 'fbd423edfd0b22c3edea69d1906d3de5';

router.get('/api/flights', async (req, res) => {
    try {
        // Extract query parameters from the request
        const { departure, arrival, travelers, checkIn, checkOut, classType } = req.query;

        // Construct the URL for the Aviationstack API request
        let url = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&dep_iata=${departure}&arr_iata=${arrival}&flight_status=active`;

        // Add optional parameters if provided
        if (checkOut) {
            url += `&check_out=${checkOut}`;
        }
        if (classType) {
            url += `&class=${classType}`;
        }

        // Make request to the Aviationstack API
        const response = await axios.get(url);

        // Return the response from Aviationstack to the client
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching flight data' });
    }
});

module.exports = router;
