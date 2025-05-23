
const register = (req,res)=>{
    console.log(req.body);
      res.send('USER found inside the Route-> authController  !') 
}
const login = (req,res)=>{
     console.log(req.body);
      res.status(200).json({
         name : req.body.name,
         userID : req.body.userID,
         message: " 🔥 Request handles Route-> authController "
      })
}

module.exports = {login,register}