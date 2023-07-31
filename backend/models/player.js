//import mongoose module
const mongoose = require("mongoose")
//schema
const playerSchema = mongoose.Schema({
    name: String ,
    position: String,
    nbre:Number,
    age:Number,
})
//Model Name (collection 'players' will be created/generated)
const player = mongoose.model("Player",playerSchema);
// Make file exporatable
module.exports = player;