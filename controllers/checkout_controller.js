const db = require("../models/index.js");

module.exports = {
    createCheckout: function(req,res){
        db.checkout.create(req.body).then(results => {
            console.log(results)
            res.json(results)
            .catch(err => res.status(422).json(err));
        })
    }
}