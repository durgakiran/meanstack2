'use strict'

var pollcontroller = require('../controllers/pollcontroller');
module.exports=function(app,passport){
    /*is logged in middleware*/
    function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.json({status: false, message: 'user not authenticated'});
			res.end();
		}
	};
	app.route('/server/authenticateuser').post(isLoggedIn,function(req,res){
	    res.json({status: true, message: 'user not authenticated'});
	    res.end();
	})
    app.route('/server/register').post(passport.authenticate('local-signup',{
        successRedirect : '/successjson', 
        failureRedirect : '/failurejson'
    }));
    app.get('/successjson', function(req, res) {
        console.log(req.body);
        res.json({message: 'Success! you can now login...!!'});
    });
    app.get('/failurejson', function(req, res) {
        console.log(req.body);
        res.json({message: 'failed...:(' });
    });
    app.route('/server/login').post(passport.authenticate('local-login',{
        successRedirect : '/login/successjson', 
        failureRedirect : '/login/failurejson'
    }));
    app.get('/login/successjson', function(req, res) {
        res.json({status: true});
    });
    app.get('/login/failurejson', function(req, res) {
        res.json({message: 'login-failed...:(' });
    });
    app.get('/viewpolls', function(req, res) {
        pollcontroller.viewPolls(req,res);
    });
     app.get('/addpoll', function(req, res) {
        pollcontroller.createPolls(req,res);
    });
    app.get('/votepoll', function(req, res) {
        pollcontroller.updatePoll(req,res);
    });
}