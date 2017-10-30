///////////////////////////////////////////
//
// HEADS UP, I DON'T FULLY UNDERSTAND THE 
//   SHIT THAT GOES ON IN THIS FILE!
//
///////////////////////////////////////////

////Grab the neccesities
//passport
const passport = require('passport');
//User model
const User = require('../../models/user');

////This time we're going to write our exported functions IN our module export statement!
//I don't know what any of this shit does.
module.exports = function(){
	passport.serializeUser(function(user, done){
		done(null, user.username);
	});

	passport.deserializeUser(function(username, done){
		User.findByUsername(username)
		.then(function(user){
			done(null, user);
		}).catch(function(deezHands){
			done(deezHands, null);
		})
	})
}