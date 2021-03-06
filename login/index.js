const express = require('express')
const router = express.Router()
const controller = require('./login.controller.js')

const handlebars = require('express-handlebars')

router.get('/', (request, response) => {
	response.render('../login/login', {
		titulo: 'Entrar na conta',
		anonimo: true,
		login: true,
		partials: {
			scripts: '<script src="js/pages/login/login-scripts.js"></script>'
		}
	})
})

router.post('/', (request, response) => {

	controller.autenticar(request.body.email, request.body.senha)
	.then((oUser) => {
		request.session.userId = oUser._id
		response.redirect('/dashboard')
	})
	.catch((err) => {

		response.render('../login/login', {
			titulo: 'Entrar na conta',
			anonimo: true,
			login: true,
			mensagem: err.message,
			email: request.body.email,
			partials: {
				scripts: '<script src="js/pages/login/login-scripts.js"></script>'
			}
		})
	})
})

module.exports = router