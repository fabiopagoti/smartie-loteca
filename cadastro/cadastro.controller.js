const Usuario = require('../usuario/Usuario.js')

const createUser = (oUser) => {
	return new Promise((resolve, reject) => {
		Usuario.create(oUser, function (err, oNewUser) {
			if (err) {
				reject({
					mensage: err
				})
			} else {
				resolve(oNewUser)
			}
		})
		
	});
}


module.exports.createUser = createUser