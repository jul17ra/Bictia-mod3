const mongoose = require('mongoose')

var ReservasSchema = new mongoose.Schema
({
    name: { type: String, required: true },
    personal_id: {  type: String, required: true },
    date: {  type: Date, required: true },
    reservation_id: {  type: String },
    description: {  type: String, required: true },
    state: {  type: String },
    state_comment: {  type: String, required: false }
})

module.exports =  mongoose.model('reservas', ReservasSchema )