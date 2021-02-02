const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "title is required"],
        minlength: [2, "must be longer than 2 letters"]
    },
    price: { type: Number },
    description: { type: String }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);
                                        //in Products-Controller
