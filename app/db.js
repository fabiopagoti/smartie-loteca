const mongoose = require('mongoose')

function setConnection(){

	let db = mongoose.connection;
	
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {

	});

	mongoose.connect('mongodb://localhost/smartie-loteca', { 
		useMongoClient: true, 
		promiseLibrary: global.Promise
	})
	
	return this
}

module.exports = setConnection