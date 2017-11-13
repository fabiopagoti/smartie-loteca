const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const Schema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	senha: {
		type: String,
		required: true
	}
})

//hashing a password before saving it to the database
Schema.pre('save', function (next) {
	let oUser = this

	bcryptjs.genSalt(10, function(err, sSalt) {

		bcryptjs.hash(oUser.senha, sSalt, function(err, sHash) {

			if (err) {
				return next(err)
			}

			oUser.senha = sHash;
			next();
		});  

	});
});

//authenticate input against database
Schema.statics.auth = function (email, senha) {

	return new Promise((resolve, reject) => {

		Usuario.findOne({ email: email })
		.exec(function (err, oUser) {
			console.log(err || oUser)

			if (err) {
				reject(new Error({
					erro: err,
					mensagem: 'Erro desconhecido'
				}))
				return
			} else if (!oUser) {
				var err = new Error('Usuario nao encontrado');
				err.status = 401;
				reject(err);
				return
			}
			bcryptjs.compare(senha, oUser.senha, function (err, result) {
				if (result === true) {
					resolve(oUser)
					return
				} else {
					reject(new Error('Senha incorreta'))
					return
				}
			})
		});
	})

}

const Usuario = mongoose.model('usuario', Schema, 'usuarios')

module.exports = Usuario;