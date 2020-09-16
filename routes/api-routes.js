var Product = require("../models/products");


module.exports = function(app) {
    // Search for Specific Character (or all characters) then provides JSON
    app.get("/api/:products?", function(req, res) {
      if (req.params.products) {
        // Display the JSON for ONLY that character.
        // (Note how we're using the ORM here to run our searches)
        Character.findOne({
          where: {
            routeName: req.params.products
          }
        }).then(function(result) {
          return res.json(result);
        });
      } else {
        Product.findAll().then(function(result) {
          return res.json(result);
        });
      }
    })};