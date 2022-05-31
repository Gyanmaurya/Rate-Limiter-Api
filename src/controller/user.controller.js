const User = require('../model/user.model');


 const router=require('express').Router();

  router.get('/use',async(req,res)=>{

   try {
       const user=await User.findOne({})
       res.status(200).send({user:user})
   } catch (error) {
       res.status(400).send({error:error})
   }

  })






 module.exports=router;