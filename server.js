const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dot-env');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('passport-local');
const flash    = require('connect-flash');
const envars = require('./envar');
const routes = require('./server/routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
app.use(session({
	secret: 'its a secret',
	resave: false,
	saveUninitialized: true
}));
mongoose.connect(envars.MONGO_URI, {useMongoClient: true/* other options */});
console.log(mongoose.connection.readyState);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session
require('./server/auth/passportlocal')(passport);
routes(app,passport);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
app.listen(3000);