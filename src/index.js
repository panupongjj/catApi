// Importing & instantiating express
// General module import
const express = require('express');
const dotENV = require('dotenv')
const { urlencoded } = require('body-parser');
dotENV.config()

// Instance of express for us to use
const app = express();


// Connection to DB 

// Middleware -- > all the tools that you want to use in yours project 
app.use(express.json()) // POST/PUT 
app.use(urlencoded())


// Routes [KEY]
// ENDPOINT: Path of "/api" & Method of GET
app.get('/api', (req,res) => {
   res.send('Connected to Cat API') 
})
// ENDPOINT: Path of "/api/XXX" & Method of POST
app.post("/api/:id",(req,res)=> {
   console.log(req.body);
   console.log(req.params.id);
   res.status(200).json({
      message: "Request handles"
   })
});

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