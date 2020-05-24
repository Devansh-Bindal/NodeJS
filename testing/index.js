const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const routes = require('./App/routes');

const app = express();
const port = 120;

app.use(bodyParser.json())
app.use(routes);

mongoose.connect("mongodb://localhost:27017/mongooosedb", {
  useNewUrlParser: "true",
  useUnifiedTopology:"true",
  useCreateIndex: "true",
});

mongoose.connection.on("error", err => {
  console.log("err", err)
});

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
});

app.listen(port, () =>
 console.log(`App is listening at http://localhost:${port}`)
 )