////Set up our responses for various route calls in this file!!11!!
//First, import our controller
const zenController = require('../controllers/zen-controller');
//And import express
const express = require('express');

//Now make the router using express.Router
const zenRouter = express.Router();
//Show all
zenRouter.get('/', zenController.index);
//Show one
zenRouter.get('/:id', zenController.show);

zenRouter.get('/new', function(req, res){
	res.render('app/zen-new')
});

zenRouter.post('/', zenController.create);

//export it!
module.exports = zenRouter;
