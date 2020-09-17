module.exports = function(app){
    const products = require('./routes/products');
  
    app.use('/api/search-products', products);
}