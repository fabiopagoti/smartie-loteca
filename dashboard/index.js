const express = require('express')
const router = express.Router()
const controller = require('./dashboard.controller.js')

const Usuario = require('../usuario/Usuario.js')

router.get('/', (request, response) => {
	console.log('GET DASHBOARD')
	console.log(request.session)

	controller.getData(request.session.userId)
	.then( (oData) => {

		response.render('../dashboard/dashboard', {
			logado: true,
			dashboard: true,
			email: oData.user.email,
			nome: oData.user.nome
		})

	})
	.catch((err) =>{
		response.redirect('/')
	})




})

module.exports = router;