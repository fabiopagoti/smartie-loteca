/*************************
*	Rotas da Aplicacao
**************************/

const lotofacil = require('./data/lotofacil.json')
const megasena = require('./data/megasena.json')
const controller = require('./controller')
const url = require('url')
const assert = require('assert')

const defineRouter = (app) => {

	app.get('/', (request, response) => {
		response.render('home', {
			home: true
		})
	})

	app.get('/sobre', (request, response) => {
		response.render('sobre', {
			sobre: true
		})
	})

	app.get('/termometro', (request, response) => {
		response.render('termometro', {
			termometro: true,
			numeros: {
				linha1: {
					no: ['01','02','03','04','05']
				},
				linha2: {
					no: ['06','07','08','09','10']
				},
				linha3: {
					no: [...Array(5).keys()].map(x => ++x + 10)
				},
				linha4: {
					no: [...Array(5).keys()].map(x => ++x + 15)
				},
				linha5: {
					no: [...Array(5).keys()].map(x => ++x + 20)
				},
			}
		})
	})

	app.post('/termometro', (request, response) => {
		try {
			let oResult = controller.parImpar(request.body);
			let sUrl = url.format({
				pathname: '/resultado',
				query: oResult
			})
			response.send(sUrl)
		} catch (e) {
			response
			.status(400)
			.send(e.message)
		}
	})

	app.get('/resultado', (request, response) => {
		console.log(request.query)
		let oQuery = request.query
		if (oQuery.frequencia) {

			response.render('resultado', oQuery)
		} else {
			response.redirect('termometro')
		}
	})


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

	app.get('/quem-somos', (request, response) => {
		response.render('quem-somos', {
			quemSomos: true
		})
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
