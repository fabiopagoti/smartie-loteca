const express = require('express')
const router = express.Router()
const controller = require('./login.controller.js')

router.get('/', (request, response) => {
	response.render('../login/login', {
		anonimo: true,
		login: true
	})
})

router.post('/', (request, response) => {

	controller.autenticar(request.body.email, request.body.senha)
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

module.exports = router