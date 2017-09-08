'use strict'

/** 
 * 	Servidor express
 */

// Dependencias
const express = require('express')
const handlebars = require('express-handlebars')

const middlewares = require('./middlewares')
const router = require('./router')



const app = express()

const createServer = () => {

	/*************************
		Configuracoes gerais
	**************************/

	// Configuracao do Template Engine Handlebars

	app.engine('handlebars', handlebars({
		defaultLayout: 'main'
	}))
	app.set('view engine', 'handlebars')

	// Configuracao das rotas case sensitive

	app.enable('case sensitive routing')

	// Diretorio com as visoes
	// app.set('view', process.cwd() + '/views') 

	// Middlewares
	middlewares(app)

	// Define rotas (GET, POST)
	router(app)

	let server = app.listen(3000, function(err) {
		console.log('Smartie loteca is up and running!')
	})

	return server
}

module.exports = createServer