const mongoose = require('mongoose')

const officerAdmittedSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
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
        unique: true,
        required: true,
    }, 

    contactNumber: {
        type: Number,
        required: true,
    }
})

mongoose.model('admittedPatientList', officerAdmittedSchema);