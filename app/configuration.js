/*************************
 *	Configuracoes gerais
 **************************/

 const handlebars = require('express-handlebars')
 const helpers = require('./middlewares/helpers')

 let app

 function setConfiguration() {
 	app = this
 	_setRouting()
 	_setTemplateEngine()
 	return this
 }

 function _setRouting() {
	// Configuracao das rotas case sensitive
	app.enable('case sensitive routing')
}

/**
 * Configuracao do Template Engine Handlebars
 */
 function _setTemplateEngine(){
 	app.engine('handlebars', handlebars({
 		defaultLayout: 'main',
 		helpers: helpers,
 		partialsDir: [
 			process.cwd() + '/views/partials/'
 		]
 	}))
 	app.set('view engine', 'handlebars')
	// Diretorio com as visoes
	app.set('views', process.cwd() + '/views') 
}

module.exports = setConfiguration