const mongoose = require('mongoose')

const officerAdmittedSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
    },

    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    }, 

    nicNumber: {
        type: String,
        unique: true
    }, 

    contactNumber: {
        type: Number,
    }
})

mongoose.model('admittedPatientList', officerAdmittedSchema);