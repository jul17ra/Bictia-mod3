const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

var MedicosSchema = new mongoose.Schema
({
    name: { type: String, required: true },
    email: {  type: String, required: true },
    password: {  type: String, required: true }
})

MedicosSchema.methods.generateJWT = ()=>{
    return jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email
    },'node-house')
}

module.exports =  mongoose.model('medicos', MedicosSchema )