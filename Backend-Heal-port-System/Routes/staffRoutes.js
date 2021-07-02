const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const router = express.Router();
const Staff = mongoose.model("Staff");

const jwtKey = "asadsafwafa";

router.post("/staff/signUp", async (req, res) => {
	console.log(req.body);

	const {
		firstName,
		lastName,
		userName,
		registrationNum,
		password,
		contactNumber,
		staffType,
	} = req.body;

	try {
		const staff = new Staff({
			firstName,
			lastName,
			userName,
			registrationNum,
			password,
			contactNumber,
			staffType,
		});
		await staff.save();
		const token = jwt.sign({ userId: staff._id }, jwtKey);
		res.send({ token });
	} catch (err) {
		return res.status(422).send(err.message);
	}
});

router.post("/staff/signIn", async (req, res) => {
	const { userName, password } = req.body;

	if (!userName || !password) {
		return res.status(422).send({ error: "Username or password is not valid" });
	}

	const staff = await Staff.findOne({ userName });

	if (!staff) {
		return res.status(422).send({ error: "Username or password is not valid" });
	}

	try {
		await staff.comparePassword(password);
		const token = jwt.sign({ userId: staff._id }, jwtKey);
		res.send({ token });
	} catch (err) {
		return res.status(422).send({ error: "Username or password is not valid" });
	}
});

module.exports = router;
