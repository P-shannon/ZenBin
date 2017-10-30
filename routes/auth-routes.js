////Set up responses for various route calls in this file
//Grab the controller
const userController = require('../controllers/user-controller');
//Grab the passport
const passport = require('../services/auth/local');
//Grab the auth helpers
const authHelper = require('../services/auth/auth-helper');
//Grab express
const express = require('express');
//start the router
const authRouter = express.Router();

////Start listening to the routes
authRouter.get('/register', authHelper.loginRedirect, function(req, res){
	res.render('app/auth-register',{
		user: req.user
	});
});

authRouter.get('/login', authHelper.loginRedirect, function(req,res){
	res.render('app/auth-login',{
		user: req.user
	});
});

authRouter.get('/logout', authHelper.loginRequired, function(req, res){
	req.logout();
	res.redirect('/zens');
});

authRouter.post('/login', passport.authenticate('local',{
	successRedirect: '/zens',
	failureRedirect: '/auth/login',
	failureFlash: false,
}));

authRouter.post('/register', userController.create);

//Export it
module.exports = authRouter;