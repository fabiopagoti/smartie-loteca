/*************************
*	Rotas da Aplicacao
**************************/

const lotofacil = require('./data/lotofacil.json')
const megasena = require('./data/megasena.json')
const controller = require('./controller')
const url = require('url')
const assert = require('assert')

const defineRouter = (app) => {

	


	app.get('/estatisticas/:loteria?', (request, response) => {
		let sLoteria = request.params.loteria
		switch (sLoteria) {
			case "lotofacil":
			response.render('loteria', {
				estatisticas: true,
				loteria: lotofacil
			})
			break

			case "megasena":
			response.render('loteria', {
				estatisticas: true,
				loteria: megasena
			})
			break

			default:
			response.render('estatisticas', {
				estatisticas: true
			})
			break
		}
	})

	

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
