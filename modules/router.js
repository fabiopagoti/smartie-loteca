/** 
 *	Rotas da aplicacao
 */

const lotofacil = require('./data/lotofacil.json')
const megasena = require('./data/megasena.json')

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

 	app.get('/estatisticas/:loteria?', (request, response) => {
 		let sLoteria = request.params.loteria
 		switch (sLoteria){
 			case "lotofacil":
 			response.render('loteria', lotofacil)
 			break

 			case "megasena":
 			response.render('loteria', megasena)
 			break

 			default:
 			response.render('estatisticas')
 			break
 		}
 	})

 	app.get('/quem-somos', (request, response) => {
 		response.render('quem-somos')
 	})

 	return app

 }

 module.exports = defineRouter