////Set up our responses for various route calls in this file!!11!!
//First, import our controller
const zenController = require('../controllers/zen-controller');
//And import express
const express = require('express');

////Grab the time module from node_modules
const moment = require('moment');
//And set the time format to a constant.
const timeFormat = "dddd, MMMM Do YYYY, HH:mm:ss"

//Now make the router using express.Router
const zenRouter = express.Router();
//Show all
zenRouter.get('/', zenController.indexValid);
//Show the zen creation dialogue
zenRouter.get('/new', function(req, res){
	res.render('app/zen-new',{
		timeFormat: timeFormat,
		user: req.user,
	})
});

//Show valids
zenRouter.get('/all', zenController.index);

//Show one
zenRouter.get('/:id', zenController.show);

zenRouter.post('/', zenController.create);

//export it!
module.exports = zenRouter;
