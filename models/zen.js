////Grab our database for querying
const db = require('../db/config');

////Grab the time module from node_modules
//const moment = require('moment');
//And set the time format to a constant.
//const timeFormat = "MM/DD/YYYY, HH:mm:ss"

////Start making the model for zens!11!!11!
//set the object with a CAPITAL FUCKING LETTER!
const Zen = {};

//logic for grabbing all zens
Zen.findAll = function(){
	return db.query(`
		SELECT * FROM zens
		`)
}

//Logic for grabbing a zen by it's ID
Zen.findById = function(id){
	return db.oneOrNone(`
		SELECT * FROM zens WHERE
		id = $1
		`,[id])
}

//Logic for creating a zen
Zen.create = function(zen){
	return db.one(`
		INSERT INTO zens 
		(content, time_stamp, title, expiration_date)
		VALUES($1, $2, $3, $4)
		RETURNING *
		`,[zen.content, zen.timeStamp, zen.title, zen.expirationDate])
}

//export it
module.exports = Zen;
