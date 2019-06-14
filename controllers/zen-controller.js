////Grab the model for information forwarding
const Zen = require('../models/zen');

////Start making the controller for zens!
//set the object with camel case singular context
const zenController = {};

//logic for rendering an index of all zens (temp)
zenController.index = function(req, res){
	Zen.findAll().then(function(zens){
		res.json({
			message: "All Zens retrived successfully!",
			zens
		})
	}).catch(function(deezHands){
		console.log(deezHands);
		res.status(500).send(deezHands);
	})
};

//logic for only bringing the non expired ones
zenController.indexValid = function(req, res){
	Zen.findAll().then(function(zens){
		let valids = zens.filter(zen => Date.now() < Number(zen.expirationDate));
		res.json({
			message: "All valid Zens retrieved successfully!",
			validZens: valids
		})
	}).catch(function(deezHands){
		console.log(deezHands);
		res.status(500).send(deezHands);
	})
};

//logic for creating a new zen
zenController.create = function(req, res){
	let currentTime = Date.now();
	Zen.create({
		title: req.body.title,
		content: req.body.content,
		timeStamp: currentTime,
		expirationDate: (req.body.content.split(" ").length * 5000) + currentTime, 
	}).then(function(newZen){
		res.json({
			message: "Zen created successfully!",
			zen: newZen
		});
	}).catch(function(deezHands){
		console.log(deezHands);
		res.status(500).send(deezHands);
	});
};

//logic for showing a single zen
zenController.show = function(req, res){
	Zen.findById(req.params.id)
	.then(function(zen){
		res.json({
			message: "Zen retrieved successfully!",
			zen: zen
		})
	}).catch(function(deezHands){
		console.log(deezHands);
		res.status(500).send(deezHands);
	})
};

//Export it
module.exports = zenController;
