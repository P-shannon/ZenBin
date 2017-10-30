////Grab the model for information forwarding
const Zen = require('../models/zen');

////Grab the time module from node_modules
const moment = require('moment');
//And set the time format to a constant.
const timeFormat = "dddd, MMMM Do YYYY, HH:mm:ss"

////Start making the controller for zens!
//set the object with camel case singular context
const zenController = {};

//logic for rendering an index of all zens (temp)
zenController.index = function(req, res){
	Zen.findAll().then(function(zens){
		res.render('app/index',{
			zens: zens
		})
	}).catch(function(deezHands){
		console.log(deezHands);
		res.status(500).send(deezHands);
	})
};

//logic for only bringing the non expired ones
zenController.indexValid = function(req, res){
	Zen.findAll().then(function(zens){
		return zens.filter(function(zen){
			return moment().diff(moment(zen.time_stamp, timeFormat), 'seconds') < 300; 
		})
	}).then(function(valids){
		res.render('app/index',{
			zens: valids
		})
	}).catch(function(deezHands){
		console.log(deezHands);
		res.status(500).send(deezHands);
	})
};

//logic for creating a new zen
zenController.create = function(req, res){
	Zen.create({
		content: req.body.content,
		timeStamp: moment().format(timeFormat),
		uid: 1
	}).then(function(){
		res.redirect('/zens');
	}).catch(function(deezHands){
		console.log(deezHands);
		res.status(500).send(deezHands);
	});
};

//logic for showing a single zen
zenController.show = function(req, res){
	Zen.findById(req.params.id)
	.then(function(zen){
		res.render('app/zen-single',{
			zen: zen
		})
	}).catch(function(deezHands){
		console.log(deezHands);
		res.status(500).send(deezHands);
	})
};

//Export it
module.exports = zenController;