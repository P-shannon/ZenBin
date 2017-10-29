////Grab dem npm packages!!!
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
//instantialize our express app.
const app = express();
//And our enveloped configuration files
require('dotenv').config()

////Now we set up our express instance' operation settings
//The view's directory parameters
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
//Use the logger on 'dev' mode
app.use(logger('dev'));
//Point all static file requests to the public folder
app.use(express.static(path.join(__dirname,'public')));
//let the bodies parse json, let the bodies parse json, let the bodies parse j- *tiss tiss tiss tiss* SOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOON
app.use(bodyParser.json());
//I don't know what this line does, but I'm not going to find out what happens without it
app.use(bodyParser.urlencoded({extended:false}));
//Tell our method override to override methods only when it finds '_method' in a certain request's query
app.use(methodOverride('_method'));
//wake up the cookie-parser for work
app.use(cookieParser());
//Some complicated workings of express-session that I don't at all understand
app.use(session({
	//But I know that THIS particular line is used for telling our local strategy where to find the super sekret key for encrypting super sekret things
	secret: process.env.SECRET_KEY,
	resave: false,
	saveUninitialized: true
}));
//Set up the passport to do things when needed
app.use(passport.initialize());
app.use(passport.session());

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
	res.render('index');
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