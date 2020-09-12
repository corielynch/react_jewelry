
const express = require('express');

const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/public"));

 
db.sequelize.sync().then(function() {
 
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });