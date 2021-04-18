const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request-promise');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: '../X-ray images api/uploads'});

// Express app
const app = express();

// Server Running port number
const PORT = 3000;

// Requiring model
require('./Models/Patient');
require('./Models/staff');
require('./Models/userSymptoms')
require('./Models/admittingPatients')

// Tokens for patient and staff
const patientToken = require('./Middleware/patientToken');
const staffToken = require('./Middleware/staffToken');

// Routing for patient and staff
const patientRoute = require('./Routes/patientRoutes');
const staffRoute = require('./Routes/staffRoutes');
const userSymptoms = mongoose.model("userSymptoms");
const admittingPatients = mongoose.model("admitPatientList");
const patientInfo = mongoose.model("Patient")

app.use(bodyParser.json());
app.use(express.static('public'));
app.use("/", router);
var jsonParser = bodyParser.json()

// using routes of patients and staff
app.use(patientRoute);
app.use(staffRoute);


// connect to mongodb
const dbURI = 'mongodb+srv://heal-port-admin:WNj4nvpUosFDwNzJ@heal-port-system.b4i5i.mongodb.net/Authentication-Base?retryWrites=true&w=majority';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Success massage when connected to database
mongoose.connection.on('connected', () => {
    console.log("Connected to Database...");
});

// Error massage when connected to database
mongoose.connection.on('error', () => {
  console.log('An  error has occurred', err);
});

app.get('/patient', patientToken, (req, res) => {
    res.send('Your username is ' + req.patient.userName + " Your password is " + req.patient.password) + " Your Name is " + req.patient.firstName;
});

app.get('/staff', staffToken, (req, res) => {
    res.send('Your username is ' + req.staff.userName + " Your password is " + req.staff.password);
});

app.get('/special', (req, res) => {
  res.send("You have received...");
})


// uploading symptoms to data science component
app.post('/getSymptoms', jsonParser, async (req, res) => {
    console.log("req.body : ", req.body)
    
    var userName = req.body.userName
    var symptoms = req.body.symptoms

    var sendingData = {
      Symptoms: symptoms
    }

    console.log(userName)
    console.log(symptoms)

    var options = {
      method: 'POST',
      uri: 'http://127.0.0.1:5000/sendDisease',
      body: sendingData,
      json: true
    }

    var returnData;
    var sendRequest = await request(options)
    .then(function (parserBody) {
      console.log(parserBody)
      returnData = parserBody;
    })
    .catch (function (err) {
      console.log(err)
    })

    res.send(returnData);
})

// uploading image to data science component
app.post('/upload', jsonParser, async (req, res) => {

  console.log("req.body : ", req.body)
  console.log(req.body.selectedImage.Location)

  var sendingData = {
    Location: req.body.selectedImage.Location
  }

  var option = {
      method: 'POST',
      uri: 'http://127.0.0.1:8080/api/v1/resources/x-ray/image',
      body: sendingData,
      json: true
    }
  
    var returnInfo;
    var sendRequest = await request(option)
    .then(function (parserBody) {
      console.log(parserBody)
      returnInfo = parserBody;
    })
    .catch(function (err) {
      console.log(err)
    })
      console.log(returnInfo)
      res.send(returnInfo)
  })

// Saving a patients symptoms
app.post('/save/Symptoms', (req, res) => {
  const saveSymptoms = new userSymptoms ({
    userName: req.body.userName,
    symptoms: req.body.symptoms
  })

  saveSymptoms.save()
  .then(data => {
    console.log(data)
    res.send(data)
  }) .catch (err => {
    console.log(err)
  })
})

// Saving admitting patients information
app.post('/save/admitPatient', (req, res) => {
  const saveAdmitPatients = new admittingPatients ({
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nicNumber: req.body.nicNumber,
    contactNumber: req.body.contactNumber
  })

  var success = {
    Success: "Successful"
  }

  var unsucess = "UnSuccessful" 

  saveAdmitPatients.save()
  .then(data => {
    res.send(success)
  }) 
  .catch(err => {
    console.log(unsucess)
  })
})

// Retrieving all admitting patients details list
app.get('/retrieve/information/all', (req, res) => {
  admittingPatients.find({}, function (err, result) {
    if (err) {
      res.send(err)
    } else {

      res.send(result)

    }
  })
})

// Retrieving a particular admitted patient's information
app.post('/retrieve/information/', (req, res) => {
  let name = req.body.userName

  admittingPatients.find({ userName: name }, function (err, result) {
    if (err) {
      res.send(err)
    } else {
      console.log(result)

      var userName = name
      var firstName = result[0].firstName
      var lastName = result[0].lastName
      var niceNumber = result[0].nicNumber
      var contactNumber = result[0].contactNumber

      var sendingData = {
        userName,
        firstName,
        lastName,
        niceNumber,
        contactNumber
      }

      console.log(sendingData)
      res.send(sendingData);
    }
  })
})

// Retrieving a particular patient's information
app.post('/retrieve/information/patientInfo', (req, res) => {

  let name = req.body.userName
  console.log(name)

  patientInfo.find({ userName: name }, function(err, result) {
    if (err) {
      res.send(err);
    } else {

      var firstName = result[0].firstName
      var lastName = result[0].lastName
      var niceNumber = result[0].nicNumber
      var contactNumber = result[0].contactNumber
      
      var sendingData = {
        firstName,
        lastName,
        niceNumber,
        contactNumber
      }

      console.log(sendingData)

      res.send(sendingData);
    }
  })
})

// Notifying that server is listing on port 3000...
app.listen(PORT, () => {
    console.log("Server running on " + PORT);
});