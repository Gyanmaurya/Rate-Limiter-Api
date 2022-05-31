const { default: mongoose } = require("mongoose");

 const userSchema=new mongoose.Schema({
     firstname:{type:String,require:true},
     lastname:{type:String,require:true},
     age:{type:Number,require:true}
 })

 const User=mongoose.model('users',userSchema);
 module.exports=User;