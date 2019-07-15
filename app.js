const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();

// Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));

// Index Route
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.get("/canceled", (req, res) => {
  res.render("canceled");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
