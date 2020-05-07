const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const routes = require('./items/routes');

const app = express();
const port = 5400;

app.use(bodyParser.json());
app.use(routes);

mongoose.connect("mongodb://127.0.0.1:27017/inventory", {
  useNewUrlParser: "true",
  useUnifiedTopology:"true",
  useCreateIndex: "true",
  useFindAndModify: false,
  // serverSelectionTimeoutMS: 5000 
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




