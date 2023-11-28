
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({


    profile: {
        type: String,
        trim: true,
        enum: ['Freelancer', 'Empresa']
    },
    status: {
        type: Boolean,
        required: true,
        default: true

    },


    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, informe um endereço de e-mail válido']
    },

}, { strict: false });
module.exports = mongoose.model('User', schema);ç