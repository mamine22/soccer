//import mongoose module
const mongoose = require("mongoose")
//schema
const teamSchema = mongoose.Schema({
    name: String ,
    owner: String,
    staduim:String,
    foundation:Number,
})
//Model Name (collection 'teams' will be created/generated)
const team = mongoose.model("Team",teamSchema);
// Make file exporatable
module.exports = team;