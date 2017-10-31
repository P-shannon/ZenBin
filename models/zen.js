////Grab our database for querying
const db = require('../db/config');

////Start making the model for zens!11!!11!
//set the object with a CAPITAL FUCKING LETTER!
const Zen = {};

//TODO: loop around and give these more complicated methods

//logic for grabbing all zens
Zen.findAll = function(){
	return db.query(`
		SELECT * FROM zens
		`);
}

//Logic for finding zens by user
Zen.findAllByUser = function(uid){
	return db.manyOrNone(`
		select * from zens where user_id = $1
		`,[uid])
}

//Logic for grabbing a zen by it's ID
Zen.findById = function(id){
	return db.oneOrNone(`
		SELECT * FROM zens WHERE
		id = $1
		`,[id]);
}

//Logic for creating a zen
Zen.create = function(zen){
	return db.one(`
		INSERT INTO zens 
		(content, time_stamp, user_id, title)
		VALUES($1, $2, $3, $4)
		RETURNING *
		`,[zen.content, zen.timeStamp, zen.uid, zen.title])
}

//export it
module.exports = Zen;