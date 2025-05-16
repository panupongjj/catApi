// Import express + router
const express = require('express');
const router = express.Router();

// Import Controller to Handle qurey 
const catsController = require('../controllers/catsController');


// GET ROUTE
router.get("/",catsController.getCats)

      /*
       // Refactor ==> MOVE THIS TO catController in the getCat Function
      router.get("/", (req,res) =>{
            res.send('🐱 Cat found inside the CatRoute !') 
      });
      */


// POST ROUTE
router.post("/",catsController.postCats)
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