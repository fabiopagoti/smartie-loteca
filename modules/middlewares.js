/*************************
*	Middlewares
**************************/

const express = require('express')
const bodyParser = require('body-parser')
const controllerHome = require('../home').controller
const controllerTermos = require('../termos').controller
const controllerAgenda = require('../agenda').controller
const controllerSobre = require('../sobre').controller
const controllerTermometro = require('../termometro').controller
const controllerQuemSomos = require('../quem_somos').controller

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
	_app.use('/', controllerHome)
	_app.use('/glossario', controllerTermos)
	_app.use('/agenda', controllerAgenda)
	_app.use('/sobre', controllerSobre)
	_app.use('/termometro', controllerTermometro)
	_app.use('/quem-somos', controllerQuemSomos)
}



module.exports = defineMiddlewares