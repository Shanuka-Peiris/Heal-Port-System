const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const { use } = require('../Routes/patientRoutes');
const Patient = mongoose.model('Patient');

const jwtKey = "asadsafwafa";

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({ error: "You must be logged in" });
    }

    const token = authorization.replace("Bearer ", "");

    jwt.verify(token, jwtKey, async(err, payload) => {
        if (err) {
            return res.status(401).send({ error: "You must be logged in" });
        }

        const { userId } = payload;
        const patient = await Patient.findById(userId);
        req.patient = patient;
        next();
    });
}