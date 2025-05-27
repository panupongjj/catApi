// Import express + router
const express = require('express');
const router = express.Router();

// Import Controller to Handle query 
const catsController = require('../controllers/catsController');
// MIDDLE WARE
const verifyToken = require('../middleware/verifyAuth');
const verifyAdmin = require('../middleware/verifyAdmin')

// GET http://localhost:5000/api/cats
router.get("/", verifyToken, catsController.getCats)

// POST http://localhost:5000/api/cats
router.post("/", verifyToken, verifyAdmin, catsController.postCat)


//Export the router
module.exports = router;