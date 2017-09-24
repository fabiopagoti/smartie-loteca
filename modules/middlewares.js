/*************************
*	Middlewares
**************************/

const express = require('express')
const bodyParser = require('body-parser')
const controllerTermos = require('../termos').controller

let _app

const defineMiddlewares = (app) => {

	// Captura app express para reutilizar nas funcoes _auxiliares
	_app = app

	_setAssets()
	_setBodyParser()
	_setControllers()

	return app
}

const _setAssets = () => {
	_app.use(express.static('public'))
}

const _setBodyParser = () => {
	_app.use('/termometro', bodyParser.json())
	_app.use('/login', bodyParser.urlencoded({}))
}

const _setControllers = () => {
	_app.use('/termos', controllerTermos)
}



module.exports = defineMiddlewares