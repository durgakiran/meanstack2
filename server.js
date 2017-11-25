const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const dotenv = require('dot-env');
const mongoose = require('mongoose');
const envars = require('./envar.js');
const app = express();

// API file for interacting with MongoDB
//const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

mongoose.connect(envars.MONGO_URI, {useMongoClient: true/* other options */});
console.log(mongoose.connection.readyState);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));