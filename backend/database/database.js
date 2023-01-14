const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: "config/config.env"});

const USERNAME= process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.dqk97rk.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((data) => {
    console.log(`Database is now connected: ${data.connection.host}`);
  });
};


module.exports = Connection;

