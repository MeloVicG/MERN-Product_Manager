// const { model } = require("mongoose")
const ProductController = require("../controllers/Products-Controller")


module.exports = (app) => {
    app.get("/products/index", ProductController.index)
    app.get("/products", ProductController.allProducts)
    app.post("/products/create", ProductController.createProduct)
};