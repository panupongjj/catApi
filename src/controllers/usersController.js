
const getUser = (req,res)=>{
    console.log(req.body);
      res.send('USER found inside the Route-> UserController  !') 
}
const postUser = (req,res)=>{
     console.log(req.body);
      res.status(200).json({
         Name : req.body.Name,
         userID : req.body.userID,
         message: " 🔥 Request handles Route-> UserController "
      })
}

module.exports = {getUser,postUser}