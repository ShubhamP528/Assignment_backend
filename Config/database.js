const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  return mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Connected!"))
    .catch((err) => {
      console.log("Connection error: " + err);
    });
};

module.exports = connect;
