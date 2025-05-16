module.exports = {
   //GET all the CAT\
   getCats(req,res){
      console.log(req.body);
      res.send('🐱 Cat found inside the Route-> CatsController  !') 
   },
   
   //POST NEW CAT
   postCats(req,res){
      console.log(req.body);
      res.status(200).json({
         Name : req.body.Name,
         Bread : req.body.Bread,
         message: " 🔥 Request handles Route-> CatsController "
      })
   }

}