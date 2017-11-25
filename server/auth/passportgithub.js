'use strict'


const GitHubStrategy = require('passport-github').Strategy;
const mongoose = require('mongoose');
const envar = require('../envar.js');


module.exports = function (passport) {
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});
  
  passport.use(new GitHubStrategy({
		clientID: envar.clientID,
		clientSecret: envar.clientSecret,
		callbackURL: envar.callbackURL
	},
    function(token,refreshToken,profile,done) {
    
    console.log(JSON.stringify(profile));
    db.connection();//connection is established ## mongoose 4.11.0 has a bug with mongoose.connection 
    //use mongoose.connect(process.env.MONGO_URI, {useMongoClient: true/* other options */})
    console.log(mongoose.connection.readyState);
    
    
    process.nextTick(function(){
      console.log('Hii i am here');
      User.findOne({'github.id': profile.id}, function(err, user) {
        //console.log(profile.id);
        
        if(err) {
          return done(err);
        }if(user){
          
          return done(null, user);
        }else {
					var newUser = new User();

					newUser.github.id = profile.id;
					newUser.github.username = profile.username;
					newUser.github.displayName = profile.displayName;
					newUser.github.publicRepos = profile._json.public_repos;
					

					newUser.save(function (err) {
						if (err) {
							throw err;
						}

						return done(null, newUser);
					});
				}
      });
    });
  }
                                 ));
};