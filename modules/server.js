'use strict'

/** 
* 	Servidor express
*/

// Dependencias
const express = require('express')
const app = express()
const router = require('./router')


const createServer = () => {

	// Define rotas (GET, POST)
	router(app)

	let server = app.listen(3000, function(err) {
		console.log('Smartie loteca is up!')
	})

	return server
}

module.exports = createServer