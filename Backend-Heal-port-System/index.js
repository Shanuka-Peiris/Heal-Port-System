// imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const request = require("request-promise");
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "../X-ray images api/uploads" });
const path = require("path");
const bodyParser = require("body-parser");

// app config
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// requiring Models
require("./Models/Patient");
require("./Models/staff");
require("./Models/userSymptoms");
require("./Models/admittingPatients");
require("./Models/admissionOfficerAdmit");
require("./Models/pneumonia");
require("./Models/nonPneumonia");

// tokens for auth
const patientToken = require("./Middleware/patientToken");
const staffToken = require("./Middleware/staffToken");

// routing of models
const patientRoute = require("./Routes/patientRoutes");
const staffRoute = require("./Routes/staffRoutes");
const userSymptoms = mongoose.model("userSymptoms");
const admittingPatients = mongoose.model("admitPatientList");
const patientInfo = mongoose.model("Patient");
const staffInfo = mongoose.model("Staff");
const admissionOfficerAdmit = mongoose.model("admittedPatientList");
const pneumoniaList = mongoose.model("pneumoniaList");
const nonPneumoniaList = mongoose.model("nonPneumoniaList");

// using routes of patients and staff
app.use(patientRoute);
app.use(staffRoute);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "100MB" }));

// DB config
const dbUrl =
	"mongodb+srv://heal-port-admin:WNj4nvpUosFDwNzJ@heal-port-system.b4i5i.mongodb.net/Authentication-Base?retryWrites=true&w=majority";
mongoose.connect(dbUrl, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
	console.log("DB is connected");
});

// *** api routes *** //
app.get("/", (req, res) => res.status(200).send("hello world"));

// Patient Api Routes

// getting Symptoms
app.post("/app/v1/requests/patient/disease", async (req, res) => {
	const symptomList = req.body.symptoms;

	const requestML = {
		Symptoms: symptomList,
	};

	console.log(requestML);

	const options = {
		method: "POST",
		uri: "http://127.0.0.1:5000/sendDisease",
		body: requestML,
		json: true,
	};

	var returnData;
	var sendRequest = await request(options)
		.then(function (parserBody) {
			console.log(parserBody);
			returnData = parserBody;
		})
		.catch(function (err) {
			console.log(err);
		});

	res.send(returnData);
});

// checking particular patient is admitted
app.post("/app/v1/requests/patient/admitDetails", (req, res) => {
	const name = req.body.userName;

	console.log(name);

	admittingPatients.find({ userName: name }, function (err, result) {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			console.log(result.length);
			const response = result.length;
			res.status(200).send(response.toString());
		}
	});
});

// saving symptoms to db
app.post("/app/v1/requests/patient/symptom/save", (req, res) => {
	const patientSymptoms = new userSymptoms({
		userName: req.body.userName,
		symptoms: req.body.symptoms,
	});

	patientSymptoms
		.save()
		.then((data) => {
			res.status(200).send(data);
			console.log("data", data);
		})
		.catch((err) => {
			res.send(err);
			console.log(err);
		});
});

// retrieving a particular patient's information
app.post("/app/v1/requests/patient/details", (req, res) => {
	const name = req.body.userName;

	patientInfo.find({ userName: name }, function (err, result) {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			console.log(result);
			res.status(200).send(result);
		}
	});
});

// queueing admission requested patients
app.post("/app/v1/requests/patient/add/queue", (req, res) => {
	const saveAdmitPatients = new admittingPatients({
		userName: req.body.userName,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		nicNumber: req.body.nicNumber,
		contactNumber: req.body.contactNumber,
	});

	saveAdmitPatients
		.save()
		.then((result) => {
			console.log("result", result);
		})
		.catch((err) => {
			console.log(err);
		});
});

// Staff Api Routes

// retrieving a particular patient's information
app.post("/app/v1/requests/staff/details", (req, res) => {
	const name = req.body.userName;

	staffInfo.find({ userName: name }, function (err, result) {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			result.map((e) => {
				res.status(200).send(e.staffType);
			});
			// res.status(200).send(result);
		}
	});
});

// retrieving admit requested patients list
app.get("/app/v1/requests/staff/admin/officer/pending", (req, res) => {
	admittingPatients.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

// retrieving admitted patients list
app.get("/app/v1/requests/staff/admin/officer/admitted", (req, res) => {
	admissionOfficerAdmit.find((err, result) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(result);
		}
	});
});

// relocating admission completed patients
app.post("/app/v1/requests/staff/admin/officer/accepted", (req, res) => {
	const saveAdmittedPatients = new admissionOfficerAdmit({
		userName: req.body.userName,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		nicNumber: req.body.nicNumber,
		contactNumber: req.body.contactNumber,
	});

	saveAdmittedPatients
		.save()
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
});

// remove from admit queue
app.post("/app/v1/requests/staff/admin/officer/removing", (req, res) => {
	const name = req.body.userName;

	admittingPatients.deleteOne({ userName: name }, (err, result) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(result);
		}
	});
});

// discharging patient
app.post("/app/v1/requests/staff/admin/officer/discharging", (req, res) => {
	const name = req.body.userName;

	admissionOfficerAdmit.deleteOne({ userName: name }, (err, result) => {
		if (err) {
			console.log(err);
			res.status(500).send(err);
		} else {
			console.log(result);
			res.status(200).send(result);
		}
	});
});

// removing from pneumonia list
app.post(
	"/app/v1/requests/staff/admin/doctor/pneumonia/positive/remove",
	(req, res) => {
		const name = req.body.userName;

		pneumoniaList.deleteOne({ userName: name }, (err, result) => {
			if (err) {
				console.log(err);
				res.status(500).send(err);
			} else {
				console.log(result);
				res.status(200).send(result);
			}
		});
	},
);

// removing from nonPneumonia list
app.post(
	"/app/v1/requests/staff/admin/doctor/pneumonia/negative/remove",
	(req, res) => {
		const name = req.body.userName;

		nonPneumoniaList.deleteOne({ userName: name }, (err, result) => {
			if (err) {
				console.log(err);
				res.status(500).send(err);
			} else {
				console.log(result);
				res.status(200).send(result);
			}
		});
	},
);

// adding patient to pneumonia positive list
app.post(
	"/app/v1/requests/staff/admin/doctor/pneumonia/positive/add",
	upload.single("image"),
	(req, res) => {
		const obj = new pneumoniaList({
			userName: req.body.userName,
			img: {
				data: fs.readFileSync(path.join(__dirname + "/out.jpeg")),
				contentType: "image/jpeg",
			},
		});
		obj
			.save()
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
);

// adding patient to pneumonia negative list
app.post(
	"/app/v1/requests/staff/admin/doctor/pneumonia/negative/add",
	upload.single("image"),
	(req, res) => {
		const obj = new nonPneumoniaList({
			userName: req.body.userName,
			img: {
				data: fs.readFileSync(path.join(__dirname + "/out.jpeg")),
				contentType: "image/jpeg",
			},
		});
		obj
			.save()
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
);

// retrieving pneumonia positive list
app.get(
	"/app/v1/requests/staff/admin/doctor/pneumonia/positive",
	(req, res) => {
		pneumoniaList.find((err, result) => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.status(200).send(result);
			}
		});
	},
);

// retrieving pneumonia negative list
app.get(
	"/app/v1/requests/staff/admin/doctor/pneumonia/negative",
	(req, res) => {
		nonPneumoniaList.find((err, result) => {
			if (err) {
				res.status(500).send(err);
			} else {
				res.status(200).send(result);
			}
		});
	},
);

// Image Classification
app.post("/upload", (req, res) => {
	fs.writeFile("./out.jpeg", req.body.imgsource, "base64", (err) => {
		if (err) throw err;
	});
	var sendingdata = {
		Location: "something",
	};

	var option = {
		method: "POST",
		uri: "http://127.0.0.1:8080/api/v1/resources/x-ray/image",
		body: sendingdata,
		json: true,
	};

	var returnInfo;
	var sendRequest = request(option)
		.then(function (parserBody) {
			console.log("parser body : ", parserBody);
			var sendJson = JSON.stringify({
				state: parserBody,
			});
			res.send(sendJson);
		})
		.catch(function (err) {
			console.log(err);
		});
	console.log("returned info : ", returnInfo);
	// res.send(returnInfo)
});

app.post(
	"/app/v1/requests/staff/admin/doctor/pneumonia/positive/remove",
	upload.single("image"),
	(req, res) => {
		const obj = new pneumoniaList({
			userName: req.body.userName,
			img: {
				data: fs.readFileSync(path.join(__dirname + "./out.jpeg")),
				contentType: "image/jpeg",
			},
		});
		obj
			.save()
			.then((data) => {
				console.log(data);
				res.status(200).send(data);
			})
			.catch((err) => {
				console.log(err);
				res.send(err).status(500);
			});
	},
);

app.post(
	"/app/v1/requests/staff/admin/doctor/pneumonia/negative/remove",
	upload.single("image"),
	(req, res) => {
		const obj = new pneumoniaList({
			userName: req.body.userName,
			img: {
				data: fs.readFileSync(path.join(__dirname + "./out.jpeg")),
				contentType: "image/jpeg",
			},
		});
		obj
			.save()
			.then((data) => {
				console.log(data);
				res.status(200).send(data);
			})
			.catch((err) => {
				console.log(err);
				res.send(err).status(500);
			});
	},
);

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
