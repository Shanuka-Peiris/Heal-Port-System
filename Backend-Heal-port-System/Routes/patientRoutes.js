const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const router = express.Router();
const Patient = mongoose.model('Patient');

const jwtKey = "asadsafwafa";

router.post('/patient/signUp', async (req, res) => {
    console.log(req.body);

    const { firstName, lastName, userName, nicNumber, password, contactNum } = req.body;

    try {

        const patient = new Patient({ firstName, lastName, userName, nicNumber, password, contactNum });
        await patient.save();

        const token = jwt.sign({ userId: patient._id}, jwtKey)
        res.send({ token });
    } catch (err) {
        return res.status(422).send(err.message);
    }
});

router.post('/patient/signIn', async (req, res) => {

    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(422).send({ error: "Username or password is not valid" });  
    }

    const patient = await Patient.findOne({ userName });

    if (!patient) {
        return res.status(422).send({ error: "Username or password is not valid" });
    }

    try {
        await patient.comparePassword(password);

        const token = jwt.sign({ userId:patient._id}, jwtKey);
        res.send({ token });
    } catch (err) {
        return res.status(422).send({ error: "Username or password is not valid" });
    }

});

module.exports = router;