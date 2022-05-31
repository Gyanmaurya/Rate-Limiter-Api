 

 const express=require('express');
 const app=express();
 const port=process.env.PORT || 5000;
 const connectDB=require('./config/db')
 app.use(express.json());
 const userController=require('./controller/user.controller');
 const rateLimit = require("express-rate-limit");

 app.use(
    rateLimit({
      windowMs: 12*60*60*1000, // 12 hour duration in milliseconds
      max: 3,
      message: "You exceeded 100 requests in 12 hour limit!",
      headers: true,
    })
  );

  app.use('/',userController);
//  app.get('/user',async(req,res)=>{
   
//     res.send("Succefully created")

//  })



 app.listen(port,async()=>{
   await connectDB();
    console.log("Port 5000 Listening");
 })