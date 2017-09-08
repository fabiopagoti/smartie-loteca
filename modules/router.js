'use strict'

/** 
 *	Rotas da aplicacao
 */

const defineRouter = (app) => {

	app.get('/', (request, response) => {
		response.render('home')
	})

	app.get('/sobre', (request, response) => {
		response.render('sobre')
	})

	app.get('/termometro', (request, response) => {
		response.render('termometro', {
			numeros: {
				linha1: {
					no: [...Array(5).keys()].map(x => ++x)
				},
				linha2: {
					no: [...Array(5).keys()].map(x => ++x + 5)
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

	app.get('/estatisticas', (request, response) => {
		response.render('estatisticas')
	})

	app.get('/quem-somos', (request, response) => {
		response.render('quem-somos')
	})

	return app

}

module.exports = defineRouter