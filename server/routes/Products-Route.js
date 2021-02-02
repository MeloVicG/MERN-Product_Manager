// const { model } = require("mongoose")
const ProductController = require("../controllers/Products-Controller")


module.exports = (app) => {
    app.get("/products", ProductController.allProducts)
    app.post("/products/create", ProductController.createProduct)
    app.get("/products/:id", ProductController.findOne); //detail page
    app.put("/products/edit/:id", ProductController.updateProduct);
    app.delete("/products/delete/:id", ProductController.deleteProduct);
};