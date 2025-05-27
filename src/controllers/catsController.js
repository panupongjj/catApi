
const { Cat, validateCat} = require("../models/catsModel") ;

// GET ALL CATS
const getCats = async(req, res)=>{
   try {
      console.log("Retrieving cats ...");
      const cats = await Cat.find().sort("name");
      res.status(200).send(cats);

   } catch(err){
      // LOG ERROR + ISSUE 500 RESPONSE
      console.log(err);
      res.status(500).json({
      message: "An internal server error has occurred 🔥"
      })
   }
}
   

// POST NEW CAT
const postCat = async (req, res)=>{
   try {
      console.log(req.body);

      // VALIDATION: Test the raw user data adheres to our rules
      const { error } = validateCat(req.body);
      if(error){
      // 400 ERROR: User got the data wrong
      console.log(error)
      return res.status(400).json({
         message: `The cat's ${error.details[0].context.key} is required`
      });
      }

      // CREATE AN INSTANCE OF THE MODEL: Pass data into our Cat class
      let cat = new Cat({
      name: req.body.name,
      breed: req.body.breed
      });

      // ISSUE DATABASE MODEL QUERY: Save to db
      cat = await cat.save();
      console.log(cat);
      
      // ISSUE THE RESPONSE
      res.status(201).json({
      cat: cat,
      message: `The cat, ${cat.name}, has been saved for adoption 🐱`
      })

   } catch(err) {
      // LOG ERROR + ISSUE 500 RESPONSE
      console.log(err);
      res.status(500).json({
      message: "An internal server error has occurred 🔥"
      })
   } 
}




module.exports = { getCats, postCat }