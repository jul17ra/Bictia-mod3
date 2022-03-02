const mongoose = require('mongoose')

var ReservasSchema = new mongoose.Schema
    ({
        name: { type: String, required: true },
        personal_id: { type: Number, required: true },
        date: { type: Date, required: true, },
        reservation_id: String,
        description: { type: String, required: true },
        state: { type: String, default: "Reservado" },
        comment: {
            comment_state: { type: String, default: "Éxitoso" },
            comment_date: { type: Date, default: Date.now() - 5*60*60*1000 }
        }
    })

module.exports = mongoose.model('reservas', ReservasSchema)