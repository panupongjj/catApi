const mongoose = require("mongoose");
const Joi = require("joi");

// SCHEMA: "What will the data in this collection look like?"
const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100
  },
  breed: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50
  }
});

// MODEL: Provides db functionality like "Add a new cat document to collection"
const Cat = mongoose.model('Cat', catSchema);



/*
  #######################################################################
  ################ Waiting for refactor process #########################
  #######################################################################
  VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
*/

// VALIDATION: We tell the user what IS and ISN'T allowed into the db collection
function validateCat(cat){
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    breed: Joi.string().min(5).max(50).required()
  });
  return schema.validate(cat);
}


/*
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  #######################################################################
  ################ Waiting for refactor process #########################
  #######################################################################
*/


exports.Cat = Cat;
exports.validateCat = validateCat;
