const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    orderItems: orderItems,
    shippingAddress1: String,
    shippingAddress2: String,
    city: String,
    zip: String,
    country: String,
    phone: Number,
    totalPrice: Number,
    user: User,
    dateOrdered: Date
})

exports.Product = mongoose.model('Order', orderSchema);