const Usuario = require('../usuario/Usuario.js')

const getData = (sUserId) => {


	return new Promise((resolve, reject) => {
		if(!sUserId){
			reject({
				mensagem: 'Usuario não autenticado'
			})
		}

		Usuario.findById(sUserId, function(err, oUser){
			if (err) {
				reject({
					mensagem: err
				})
			} else {
				resolve({
					user: oUser
				})
			}
		})
		
	});

	
}



module.exports.getData = getData