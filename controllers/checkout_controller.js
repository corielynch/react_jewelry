const db = require("../models/index.js");

module.exports = {
    getCheckouts: function(req,res) {
        db.checkout.get(req.body).then(results => {
            console.log(results)
            res.json(results)
        })
        .catch(err => res.status(422).json(err));
    },
    createCheckout: function(req,res){
        db.checkout.create(req.body).then(results => {
            console.log(results)
            res.json(results)
        })
        .catch(err => res.status(422).json(err));
    },
    deleteCheckout: function(req,res) {
        db.checkout.delete(req.body).then(results => {
            console.log(results)
            res.json(results)
        })
        .catch(err => res.status(422).json(err));
    }
}