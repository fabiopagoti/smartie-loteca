const Usuario = require('../usuario/Usuario.js')

const getData = (sUserId) => {


	return new Promise((resolve, reject) => {
		if(!sUserId){
			reject({
				mensagem: 'Usuario não autenticado'
			})
			return
		}

		Usuario.findById(sUserId, function(err, oUser){
			if (err) {
				reject({
					mensagem: err
				})
				return
			} else {
				resolve({
					user: oUser
				})
				return
			}
		})
		
	});

	
}



module.exports.getData = getData