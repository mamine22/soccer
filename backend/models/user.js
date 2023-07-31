//import mongoose module
const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")
//schema
const userSchema = mongoose.Schema({
    firstName: String ,
    lastName: String,
    email: {type:String,unique:true},
    pwd:String,
    address:String,
    Phone:Number,
    role:String,
    img:String,
});

//Model Name (collection 'users' will be created/generated)
const user = mongoose.model("User",userSchema.plugin(uniqueValidator));
// Make file exporatable
module.exports = user;