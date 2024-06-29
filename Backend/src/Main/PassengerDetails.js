// backend/passengerRoutes.js
const express = require("express");
const collection = require("../Config/PassengerDetailsdb");

const router = express.Router();

// Define endpoint to handle passenger details submission
router.post("/passenger-details", (req, res) => {
  const passengers = req.body;

  // Map each passenger object to a document and save it to the database
  Promise.all(passengers.map(passenger => {
    const { firstName, lastName, email, mobile } = passenger;

    // Create a new document using the PassengerDetails model
    const newPassenger = new collection({
      firstname: firstName,
      lastname: lastName,
      email: email,
      mobile: mobile
    });

    // Save the document to the database
    return newPassenger.save();
  }))
  .then(() => {
    res.status(200).json({ message: "Passenger details saved successfully." });
  })
  .catch((err) => {
    console.error("Error saving passenger details:", err);
    res.status(500).json({ message: "An error occurred while saving passenger details." });
  });
});

module.exports = router;
