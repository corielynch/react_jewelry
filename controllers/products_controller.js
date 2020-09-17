
const db = require('../models/index.js');
// get all products from database

module.exports = {
  productsAll: function (req, res) {

    db.products.findAll({}).then((results) => {
      return res.json(results);
    })
  },
  createProduct: function(req,res){
    console.log(req.body)
    db.products.create(req.body).then(results => {
      console.log(results)
      res.json(results)
    })
  }, 
  updateProduct: function(req,res){
    const id = req.params.id
    console.log(id,req.body)
    db.products.update(
      req.body,
      {
      where: {
        id:id
      }
    }).then(results => {
      res.json(results)
    })
  },
  deleteProduct: function(req,res){
    const id = req.params.id
    db.products.destroy({
      where: {
        id:id
      }
    }).then(results => {
      res.json(results)
    })
  }

}

