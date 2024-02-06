if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

const routes = require("./Routes/product");
const user = require("./Routes/user");
const database = require("./Config/database");

database(); // Ensure database connection is established

// Middleware to parse JSON and urlencoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(user);
app.use(routes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
