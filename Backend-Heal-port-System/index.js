const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Express app
const app = express();

// Server Running port number
const PORT = 3000;

// Requiring model
require('./Models/Patient');
require('./Models/staff');

// Tokens for patient and staff
const patientToken = require('./Middleware/patientToken');
const staffToken = require('./Middleware/staffToken');

// Routing for patient and staff
const patientRoute = require('./Routes/patientRoutes');
const staffRoute = require('./Routes/staffRoutes');

app.use(bodyParser.json());

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
    res.send('Your username is ' + req.patient.userName + " Your password is " + req.patient.password);
});

app.get('/staff', staffToken, (req, res) => {
    res.send('Your username is ' + req.staff.userName + " Your password is " + req.staff.password);
});


// Notifying that server is listing on port 3000...
app.listen(PORT, () => {
    console.log("Server running on " + PORT);
});


// "Symptoms":["itchinig", "acidity", "vomiting", "irritability", "restlessness" , "skin_peeling", "dehydration", "phlegn", "back_pain", "bloody_stool", "sweating", "malaise", "phlegn"]
// "Symptoms":["chills", "fatigue", "cough", "high_fever", "breathlness" , "sweating", "malaise", "phlegn", "chest_pain", "fast_heart_rate", "rusty_sputum"]
// "Symptoms": ["chills", "fatigue", "cough", "high_fever", "breathlness" , "sweating", "malaise", "phlegn", "chest_pain", "fast_heart_rate"]