const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    richDescription: String,
    image: String,
    images: String,
    brand: String,
    price: Number,
    category: Category,
    countInStock: Number,
    rating: Number,
    isFeatured: Boolean,
    dateCreated: Date
})

exports.Product = mongoose.model('Product', productSchema);