/*************************
*	Servidor express
**************************/

// Dependencias
const express = require('express')
const db = require('./db')
const configuration = require('./configuration')
const middlewares = require('./middlewares')
const router = require('./router')

const app = express()

app.setDBConnection = db
app.setConfiguration = configuration
app.setMiddlewares = middlewares
app.setRouter = router

const createServer = () => {

	// Configuracoes Gerais
	app
		.setDBConnection()
		.setConfiguration()
		.setMiddlewares()
		.setRouter()

	let server = app.listen(3000, function(err) {
		console.log('Smartie loteca is up and running!')
	})

	return server
	
}

let server = createServer()

module.exports = server

