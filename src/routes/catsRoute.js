// Import express + router
const express = require('express');
const router = express.Router();

// Import Controller to Handle query 
const catsController = require('../controllers/catsController');
// MIDDLE WARE
const { auth, admin } = require('../middleware/verifyAuth')


// GET ROUTE
// GET http://localhost:5000/api/cats
router.get("/", auth, catsController.getCats)

      /*
       // Refactor ==> MOVE THIS TO catController in the getCat Function
      router.get("/", (req,res) =>{
            res.send('🐱 Cat found inside the CatRoute !') 
      });
      */


// POST ROUTE
// POST http://localhost:5000/api/cats
router.post("/", auth, admin, catsController.postCat)
      /*
      // Refactor ==> MOVE THIS TO catController in the postCat Function
      router.post("/",(req,res)=> {
         console.log(req.body);
         //console.log(req.params.id);
         res.status(200).json({
            Name : req.body.Name,
            Bread : req.body.Bread,
            message: " 🔥 Request handles"
         })
      });
      */

//Export the router
module.exports = router;