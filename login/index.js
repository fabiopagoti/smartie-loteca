const express = require('express')
const router = express.Router()
const controller = require('./login.controller.js')

const handlebars = require('express-handlebars')

router.get('/', (request, response) => {
	response.render('../login/login', {
		titulo: 'Login',
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
		response.redirect('/')
	})
	.catch((err) => {

		response.render('../login/login', {
			anonimo: true,
			login: true,
			mensagem: err.message,
			partials: {
				scripts: '<script src="js/pages/login/login-scripts.js"></script>'
			}
		})
	})
})

module.exports = router