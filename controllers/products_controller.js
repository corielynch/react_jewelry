
var db = require('../models');

// get all products from database

exports.productsAll = function(req,res) {
  products.findAll().then(function(result) {
    console.log(result)
    return res.json(result);
   
    // db.User.findAll({
    //   where: {username: req.body.username}
    // }).then(function(users) {
    //   if (users.length > 0) {
    //     res.json({
    //       duplicateUser: true
    //     });
    //   //At some point, make sure that only one user can be associated with an email.
    //   } else {
    //     db.User.create({
    //       username: req.body.username,
    //       email: req.body.email,
    //       password: req.body.password
    //     }).then(function() {
    //       res.send({redirect: '/'});
    //     }).catch(function(err) {
    //       res.json(err);
    //     });
    //   }
    })
  };