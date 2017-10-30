////Grab the essentials
//bcrypt
const bcrypt = require('bcryptjs');
//the model
const User = require('../models/user');

////Make the fucking object
//Define it
const userController = {};

//logic for creation    //Don't know if needed vvv
userController.create = function(req, res/*, next*/){
	const salt = bcrypt.genSaltSync();
	const hash = bcrypt.hashSync(req.body.password, salt);
	User.create({
		username: req.body.username,
		password_digest: hash
	}).then(function(user){
		req.login(user,function(err){
			if (err){
				return next(err); //???
			}
			res.redirect('/zens');
		});
	}).catch(function(deezHands){
		console.log(deezHands);
		res.status(500).send(deezHands);
	})
}

module.exports = userController;