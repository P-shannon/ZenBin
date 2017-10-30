/////////////////////////////////////////////////////
//
// This file handles interactions between the users 
//       table and trying to log into it
//
/////////////////////////////////////////////////////

////Grab the essentials
//Grab passport
const passport = require('passport');
//And the something about a local strategy. CAPITALIZED CAMEL CASE
const LocalStrategy = require('passport-local').Strategy;

//Grab other things
const init = require('./passport');
//Grab the user model
const User = require('../models/user');
//Grab the auth-helper
const authHelper = require('./auth-helper');

////Then do a whole bunch of shit I barely understand!11!11
const options = {}
init();
passport.use(
	new LocalStrategy(options, function(username, password){
		User.findByUsername(username)
		.then(function(user){
			if(!user){
				return done(null, false);
			}
			if(!authHelper.comparePass(password,user.password_digest)){
				return done(null, false);
			}
			else{
				return done(null, user);
			}
		}).catch(function(deezHands){
		console.log(deezHands);
		res.status(500).send(deezHands);
		})
	})
)

////Export it
module.exports = passport;
