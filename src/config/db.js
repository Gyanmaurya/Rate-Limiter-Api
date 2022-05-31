
 const mongoose=require('mongoose');
  
 const connectDB= ()=>{

     return mongoose.connect('mongodb://localhost:27017/Books')
 }
 module.exports=connectDB;