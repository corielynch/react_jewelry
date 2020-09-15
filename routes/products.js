var express = require('express');
var router  = express.Router();
var products_controller = require('../controllers/products_controller');

router.get('/search-products', products_controller.productsAll);


module.exports = router;











// module.exports = function(app) {
//     // Search for Specific Products (or all products) then provides JSON
//     // app.get("/api/:products", function(req, res) {
//     //     console.log(req, res)
//     //   if (req.params.products) {
//     //     // Display the JSON for ONLY that product.
//     //     // (Note how we're using the ORM here to run our searches)
//     //     Products.findOne({
//     //       where: {
//     //         routeName: req.params.products
//     //       }
//     //     }).then(function(result) {
//     //       return res.json(result);
          
//     //     });
//     //   } else {
//     //     Products.findAll().then(function(result) {
//     //       return res.json(result);
//     //     });
//     //   }


//     async function asyncFunc() {
//         let data;
//         // fetch data from a url endpoint
//         axios.get("/api/products")
//           .then((result) => {
//             data = result
//           });
//         return data;
//         console.log(data)
//       }
//     // });
// }