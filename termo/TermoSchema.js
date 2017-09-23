const mongoose = require('mongoose');

const Schema = {
	termo: {
		type: String,
		required: true
	},
	resumo: {
		type: String,
		required: true
	}
}

const Termo = mongoose.model('termo', Schema, 'termos')

module.exports = Termo;