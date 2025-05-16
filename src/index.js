// Importing & instantiating express
// General module import
const express = require('express');
const dotENV = require('dotenv')
const { urlencoded } = require('express');
dotENV.config()

// Import router that been refactored
const catsRoute = require('./routes/catsRoute');
const usersRoute = require('./routes/usersRoute');


// Instance of express for us to use
const app = express();


// Connection to DB 

// Middleware -- > all the tools that you want to use in yours project 
app.use(express.json()) // POST/PUT 
app.use(urlencoded({extended:false}))


// Routes [KEY]
// ENDPOINT: Path of "/api" & Method of GET
app.get('/', (req,res) => {
   res.send('Respond from Index.js pages - none Refactor ') 
})
// ENDPOINT: Path of "/api/cat" & Method of POST
app.use("/api/cats",catsRoute)
app.use("/api/users",usersRoute)



// NOT FOUND ENDPOINT:
app.use((req, res) => {
  const err = new Error('404 - Resource Not Found');
  res.status(404).json({ 
   message: err.message 
   });
})



// Port listener
const PORT = process.env.PORT
app.listen(PORT, () => {
      console.log(`Listening on port ${PORT} !!!~~`);
})