const mongoose = require('mongoose')

var ProductsSchema = new mongoose.Schema
({
    type: { type: String, required: true },
    address: {  type: String, required: true },
    neighborhood: {  type: String, required: true },
    city: {  type: String, required: true },
    rooms: {  type: Number, required: true },
    floors: {  type: Number, required: true },
    bathrooms: {  type: Number, required: true },
    price: {  type: Number, required: true },
    garage: {type: Boolean, required: true },
    dimensions: {  type: String, required: true },
    stratum: {  type: String, required: true },
    antiquity: {  type: Number, required: true },
    agent: {  type: String, required: true },

})

module.exports =  mongoose.model('products', ProductsSchema )