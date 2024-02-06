const express = require("express");
const app = express();

const routes = require("./Routes/product");
const user = require("./Routes/user");
const database = require("./Config/database");

// const seeddb = require("./seed");

database();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// seeddb();
app.use(user);
app.use(routes);

app.listen(8080, (port = process.env.PORT || 8080) => {
  console.log(`Server is running on port ${port}`);
});
