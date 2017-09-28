const mongoose = require('mongoose');

const Schema = {
	termo: {
		type: String,
		required: true,
		unique: true
	},
	definicao: {
		type: String,
		required: true
	}
}

const Termo = mongoose.model('termo', Schema, 'termos')

module.exports = Termo;