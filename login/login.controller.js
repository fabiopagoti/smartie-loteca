const express = require('express')
const token = require('./token')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/', (request, response) => {
	response.render('../login/login', {
		login: true
	})
})

router.post('/', (request, response) => {
	const payload = {
		foo: 'bar'
	}
	const secret = 'dev-secret'
	const options = {
		algorithm: 'HS256'
	}

	const onJwtSigned = (err, token) => {
		if(err){
			response
				.status(403)
				.send({
					success: false,
					message: 'Token not generated'
				})
			return
		}

		response
		.status(200)
		.send({
			success: true,
			token: token
		})
	}
	
	jwt.sign(payload, secret, options, onJwtSigned )
	
})



module.exports = router