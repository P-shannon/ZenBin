////Grab the database
const db = require('../db/config');

////Set up the User object
const User = {};

////Give it logic
//Finding a user
User.findByUsername = function(username){
	return db.one(`
		select * from users where username = $1
		`,[username]
	)
};

//Creating a new user
User.create = function(user){
	return db.one(`
		insert into users(
		username,
		password_digest)
		values($1,$2)
		returning *
		`,[user.username, user.password_digest]
	)
}

////Export it
module.exports = User;