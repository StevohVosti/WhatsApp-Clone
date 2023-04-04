const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  members: {
    type: Array
},
message: {
    type: String
}},
{
    timestamps: true
});


module.exports = mongoose.model("Conversation", userSchema);