const db = require("../models/index.js");

module.exports = {
    createCheckout: function(req,res){
        console.log(req.body)
        db.checkout.create(req.body).then(results => {
            console.log(results)
            res.json(results)
        })
    }
}