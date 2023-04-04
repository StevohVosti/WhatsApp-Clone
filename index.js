const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: "/backend/config/config.env" });
const Connection = require("./Database/db");
const { default: mongoose } = require("mongoose");

const Routes = require("./Routes/Route");

const app = express();

const PORT = 4000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// Connectng to MongoDB
mongoose.set("strictQuery", true);
mongoose.set("strictQuery", false);

Connection(username, password);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

app.use(express.static(path.join(__dirname, "../Frontend/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "../Frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
