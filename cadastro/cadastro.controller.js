const Usuario = require('../usuario/Usuario.js')

const createUser = (oUser) => {
	// console.log('Criando usuario..')
	// console.log(oUser)
	return new Promise((resolve, reject) => {
		Usuario.create(oUser, function (err, user) {
			if (err) {
				reject({
					mensage: err
				})
			} else {
				resolve(oUser)
			}
		})
		
	});
}


module.exports.createUser = createUser