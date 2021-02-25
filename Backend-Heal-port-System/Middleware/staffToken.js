const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const { use } = require('../Routes/staffRoutes');
const Staff = mongoose.model('Staff');

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
        const staff = await Staff.findById(userId);
        req.staff = staff;
        next();
    });
}