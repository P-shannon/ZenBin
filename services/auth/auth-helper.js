///////////////////////////////////////////
//
// HEADS UP, I DON'T FULLY UNDERSTAND THE 
//   SHIT THAT GOES ON IN THIS FILE!
//
///////////////////////////////////////////

//// Grab the bcrypt module
const bcrypt = require('bcryptjs');

////Write functions we're going to use with our authentication functions
//Check passwords
function comparePass(userPassword, databasePassword){
	return bcrypt.compareSync(userPassword, databasePassword);
}
//Redirect if logged in
function loginRedirect(req, res, next){
	if(req.user){
		return res.redirect('/zens');
	}
	return next();	
}
//Redirect to login if not logged in
function loginRequired(req, res, next){
	if(!req.user){
		return res.redirect('/auth/login');
	}
	return next();
}

//Export them for use in other files
module.exports = {
	comparePass: comparePass,
	loginRequired: loginRequired,
	loginRedirect: loginRedirect,

}