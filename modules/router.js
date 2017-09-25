/*************************
*	Rotas da Aplicacao
**************************/


const controller = require('./controller')
const url = require('url')
const assert = require('assert')

const defineRouter = (app) => {


	app.post('/login', (request, response) => {
		let oUser = controller.readUser(request.body.username)
		response.send(oUser)
	})

	app.post('/cadastrar', (request, response) => {
		response.send(controller.createUser())
	})

	return app

}

module.exports = defineRouter
