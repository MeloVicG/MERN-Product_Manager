const { Product } = require("../models/Products-Model")

//controller handles creation


module.exports.createProduct = (request, response) => {
    Product.create(request.body)
        .then(data => response.json(data))
        .catch(err => response.json('create error: ', err));
}

module.exports.allProducts = (request, response) => {
    Product.find()
        .then(data => response.json(data))
        .catch(err => response.json(err));
}

module.exports.findOne = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json('findOne error!', err))
}

module.exports.updateProduct = (req, res) => {
    Product.updateOne({ _id: req.params.id }, req.body, {new:true}) //what does this line do?
        .then(updates => res.json(updates))
        .catch(err => res.json('update error:',err))
}
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.json('deleteOne error:',err))
}