const {Product} = require("../models/Products-Model")

//controller handles creation




//the data? in res.data??
module.exports.index = (req,res) => {
    res.json({"message": "Hello world!"})
}

module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(data => response.json(data))
        .catch(err => response.json(err));
}

module.exports.allProducts = (request, response) => {
    Product.find()
        .then(data => response.json(data))
        .catch(err => response.json(err));
}