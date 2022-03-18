const express = require("express");
const { type } = require("express/lib/response");
const app = express();

app.use(express.json());
const index = require("./routes/index");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Aloww-Headrs",
    "Origin, X-Requested-with, Content-type, Accept"
  );
  next();
});
app.use("/", index);

module.exports = app;
