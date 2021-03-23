const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SymptomsSchema = new mongoose.Schema ({
    userName: {
        type: String,
        required: true,
    },
    
})