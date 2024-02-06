if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

const routes = require("./Routes/product");
const user = require("./Routes/user");
const database = require("./Config/database");

database(); // Ensure database connection is established

app.use(user);
app.use(routes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Example app listening on port 3000!");
});
