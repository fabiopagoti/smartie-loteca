
// const token = require('./token')
// const jwt = require('jsonwebtoken')
// router.post('/', (request, response) => {
// 	const payload = {
// 		foo: 'bar'
// 	}
// 	const secret = 'dev-secret'
// 	const options = {
// 		algorithm: 'HS256'
// 	}

// 	const onJwtSigned = (err, token) => {
// 		if(err){
// 			response
// 				.status(403)
// 				.send({
// 					success: false,
// 					message: 'Token not generated'
// 				})
// 			return
// 		}

// 		response
// 		.status(200)
// 		.send({
// 			success: true,
// 			token: token
// 		})
// 	}

// 	jwt.sign(payload, secret, options, onJwtSigned )

// })

const Usuario = require('../usuario/Usuario.js')

module.exports.autenticar = (email, senha) => {

	return new Promise( (resolve, reject) => {

		Usuario.auth(email, senha)
		.then((oUser) => {
			resolve(oUser)
		})
		.catch((err) => {
			reject(err)
		})
	} )

}