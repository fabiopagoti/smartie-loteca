const mongoose = require('mongoose');

const Schema = {
	concurso: {
		type: Number,
		required: true,
		unique: true
	},
	dezenas: {
		type: Array,
		required: true
	},
	imparPar: {
		impar: {
			type: Number
		},
		par: {
			type: Number
		}	
	}
}

const Lotofacil = mongoose.model('lotofacil', Schema, 'lotofacil')

module.exports = Lotofacil;