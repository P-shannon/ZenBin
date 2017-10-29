////Make the configuration object for our future pg-promise import
//Console every database query we receive
const options = {
	query: function(e){
		console.log(e.query);
	}
}

//Import the pg-promise with the options specified
const pgp = require('pg-promise')(options);

//Configure database based on data of where the database is based
function setDatabase(){
	if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV){
		return pgp({
			database: 'zenbin_dev',
			port: 5432,
			host: 'localhost',
		});
	} else if(process.env.NODE_ENV === 'production'){
		return pgp(process.env.DATABASE_URL);
	}
}

//Now instantiate our database with the above configurations
const db = setDatabase();

//And export it for use in other files (models)
module.exports = db;