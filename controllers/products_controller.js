
var db = require('../models/index.js');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models/index.js');
// get all products from database

  exports.productsAll = function(req, res) {

  db.products.findAll({}).then((results) => {
   console.log(results)
   return res.json(results);
  })
};

