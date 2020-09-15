
var db = require('../models/index.js');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models/index.js');
// get all products from database

// exports.productsAll = function(res) {
//   db.products.findAll().then(function(result) {
//     console.log(result)
//     return res.json(result);
   
//     })
//   };

exports.productsAll = function(req, res) {

  db.products.findAll({}).then((result) => {
   console.log("products:", result)
   return res.json(result);
 })
};


// exports.productsAll = function(req, res) {
//   db.product.findAll().then((result) => {
//    return res.json(result);
//    console.log(req.body)
//  })
// };


// exports.productsAll = function(res) {
//   db.product.findAll().then((result) => {

//    console.log(result)
//    res.json(result);
    
//  })
// };

// exports.productsAll = function(res) {
//    db.product.findAll().then((result) => {
//     try {
//     console.log(result)
//     return res.json(result);
//       } catch(err) {
//       console.log(err);
//       }
//   })
// };


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