const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/public"));

// Routes
// =============================================================
// require("./app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
// require("./app/routes/html-routes.js")(app);

db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });