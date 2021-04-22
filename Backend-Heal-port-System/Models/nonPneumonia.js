const mongoose = require('mongoose');

const nonPneumoniaSchema = new mongoose.Schema ({
    userName: {
        type: String,
        required: true,
        unique: true
    },

    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    nicNumber: {
        type: String,
        required: true,
    },

    contactNumber: {
        type: Number,
        required: true,
    }
})

mongoose.model('nonPneumoniaList', nonPneumoniaSchema);