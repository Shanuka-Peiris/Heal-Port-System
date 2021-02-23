const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const patientSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        unique: true,
        required: true,
    },
    nicNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true
    }
});

patientSchema.pre('save', function(next) {

    const patient = this;
    
    if (!patient.isModified('password')) {
        return next()
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err)
        }

        bcrypt.hash(patient.password, salt, (err, hash) => {
            if (err) {
                return next(err)
            }

            patient.password = hash;
            next();
        })
    });
});

patientSchema.methods.comparePassword = function(candidatePassword) {
    const patient = this;

    return new Promise ((resolve, reject) => {
        bcrypt.compare(candidatePassword, patient.password, (err, isMatch) => {
            if (err) { 
                return reject(err);
            }

            if (!isMatch) {
                return reject(err);
            }

            resolve(true)
        });
    });
}

mongoose.model('Patient', patientSchema);