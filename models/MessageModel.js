const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  conversationId: {
    type: String
},
senderId: {
    type: String
},
receiverId: {
    type: String
},
text: {
    type: String
},
type: {
    type: String
}
},
{ 
    timestamps: true
})



module.exports = mongoose.model("Message", userSchema);