const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator/check');
const controller = require('./cadastro.controller.js')

router.get('/', (request, response) => {
	response.render('../cadastro/cadastro', {
		cadastro: true
	})
})

router.post('/', (request, response) => {

	controller.createUser(request.body)
	.then((oUser) => {
		request.session.userId = oUser._id
		response.redirect('/')
	})
	.catch((err) => {
		console.log(err)

		response.render('../cadastro/cadastro', {
			mensagem: err
		})
	})
	
})

module.exports = router;