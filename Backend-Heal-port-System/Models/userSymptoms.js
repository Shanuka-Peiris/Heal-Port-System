const mongoose = require('mongoose')

const userSymptomSchema = new mongoose.Schema({
    userName: String,
    symptoms: Object
})

mongoose.model("userSymptoms", userSymptomSchema)