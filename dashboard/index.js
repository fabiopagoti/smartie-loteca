const express = require('express')
const router = express.Router()
const controller = require('./dashboard.controller.js')

router.get('/', (request, response) => {

	controller.getData(request.session.userId)
	.then( (oData) => {
		response.render('../dashboard/dashboard', {
			anonimo: request.session.userId ? false : true,
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