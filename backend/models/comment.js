const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
    content: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    matchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Match"
    },
    firstName:String,
    lastName:String,
    img:String,
});
const comment = mongoose.model("Comment", commentSchema);
module.exports = comment;