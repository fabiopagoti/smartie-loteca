/*************************
*	Servidor express
**************************/

// Dependencias
const express = require('express')
const mongoose = require('mongoose')
const configuration = require('./configuration')
const middlewares = require('./middlewares')
const router = require('./router')

const app = express()

const createServer = () => {

	mongoose.connect('mongodb://localhost/smartie-loteca', { 
		useMongoClient: true, 
		promiseLibrary: global.Promise
	})
	
	// Configuracoes Gerais
	configuration(app)

	// Middlewares
	middlewares(app)

	// Define rotas (GET, POST)
	router(app)

	let server = app.listen(3000, function(err) {
		console.log('Smartie loteca is up and running!')
	})

	return server
	
}

let server = createServer()

module.exports = server

