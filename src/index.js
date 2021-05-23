const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();

// Static public file processing (image)
app.use(express.static(path.join(__dirname, "/public")))

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine("hbs", handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
// Config my own path to views, __dirname is current working folder
app.set("views", path.join(__dirname, "/resources/views"));

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(3000);
