
module.exports = function(app){

    const products = require('./routes/products');
  
    app.use('/search-products', products);
//other routes..
}