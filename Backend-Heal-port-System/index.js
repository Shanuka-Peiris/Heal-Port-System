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

app.use(bodyParser.json());


// Mongo database url
const dbURI = "mongodb+srv://heal-port-admin:lj6q6meogzEBrTBB@heal-port-system.b4i5i.mongodb.net/Authentication-Base?retryWrites=true&w=majority";
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Connection success message
mongoose.connection.on('connected', () => {
    console.log("Connected to Database ...");
});


// Connection error message
mongoose.connection.on('error', () => {
    console.log("An Error has occurred", err);
});


// Notifying that server is listing on port 3000...
app.listen(PORT, () => {
    console.log("Server running on " + PORT);
});