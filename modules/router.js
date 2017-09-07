'use strict'

/** 
*	Rotas da aplicacao
*/

const defineRouter = (app) => {

	app.get('/', (request, response) => {
		response.send('ok')
	})

	app.get('/sobre', (request, response) => {
		response.send('sobre')
	})

	app.get('/quem-somos', (request, response) => {
		response.send('quem somos')
	})

}

module.exports = defineRouter