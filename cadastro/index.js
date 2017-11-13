const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator/check');
const controller = require('./cadastro.controller.js')

router.get('/', (request, response) => {
	response.render('../cadastro/cadastro', {
		anonimo: true,
		cadastro: true
	})
})

router.post('/', (request, response) => {
	console.log('POST cadastro')
	console.log(request.session)

	controller.createUser(request.body)
	.then((oUser) => {
		console.log('Usuario criado')
		console.log(oUser)
		request.session.userId = oUser._id
		console.log(request.session)
		response.redirect('/dashboard')
	})
	.catch((err) => {
		console.log(err)

		response.render('../cadastro/cadastro', {
			mensagem: err
		})
	})
	
})

module.exports = router;