/*************************
*	Servidor express
**************************/

// Dependencias
const express = require('express')
const db = require('./db')
const configuration = require('./configuration')
const middlewares = require('./middlewares')
const router = require('./router')

// other
const PORT = process.env.PORT || 3000; 
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

	app.set('port',PORT);
	let server = app.listen(app.get('port'), function(err) {
		console.log(`Smartie loteca is up and running on port ${app.get('port')} !`)
	})

	return server
	
}

let server = createServer()

module.exports = server

