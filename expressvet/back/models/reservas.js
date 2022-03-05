const mongoose = require('mongoose')

var ReservasSchema = new mongoose.Schema
    ({
        name: { type: String, required: true },
        personal_id: { type: Number, required: true },
        date: { type: Date, required: true },
        reservation_id: String,
        description: { type: String, required: true },
        state: { type: String, default: "Reservado" },
        comment: [
            {
                comment_state: String,
                comment_date: Date
            }
        ]
    })

module.exports = mongoose.model('reservas', ReservasSchema)