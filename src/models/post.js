
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    status: {
        type: Boolean,
        required: true,
        default: true
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    }


}, { strict: false });
module.exports = mongoose.model('Post', schema);