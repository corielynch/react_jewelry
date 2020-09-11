
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Products = sequelize.define("products", {
  handle: Sequelize.STRING,
  title: Sequelize.STRING,
  body: Sequelize.STRING,
  tags: Sequelize.STRING,
  price: Sequelize.NUMBER
});

// Syncs with DB
Products.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Products;
