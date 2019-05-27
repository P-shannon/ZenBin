////Grab dem npm packages!!!
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//instantialize our express app.
const app = express();
//And our enveloped configuration files
require('dotenv').config()

////Now we set up our express instance' operation settings
//Use the logger on 'dev' mode
app.use(logger('dev'));
//let the bodies parse json, let the bodies parse json, let the bodies parse j- *tiss tiss tiss tiss* SOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOON
app.use(bodyParser.json());
//I don't know what this line does, but I'm not going to find out what happens without it
app.use(bodyParser.urlencoded({extended:false}));
//Tell our method override to override methods only when it finds '_method' in a certain request's query

////Now we fire up the server
//If we didn't specify in a particular .env variable, listen to port 30XX
const PORT = process.env.PORT || 3030;
//When PORT is live, log it to the console.
app.listen(PORT, function(){
	console.log(`We're live on port: ${PORT}!\nKnock em dead!`);
});

////Set up first level routing
//When getting root, give them the landing page.
app.get('/', function(req, res){
	res.json({
		message: "Root level loaded successfully!",
		directory: {
			//TODO: Implement API directory
			message: "Coming soon!"
		}
	});
})

////Other routes will go here.
//like this super cool zenRouter!
const zenRouter = require('./routes/zen-routes')
//Reroute all requests made to '/zens' to the zenRouter file.
app.use('/zens', zenRouter);

//Handle 404s
app.use('*', function(req, res){
	res.status(404).send({
		status: status,
		message: "Path not found!"
	})
})
