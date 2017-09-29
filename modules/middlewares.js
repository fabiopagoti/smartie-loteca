/*************************
*	Middlewares
**************************/

const express = require('express')
const token = require('../login/token')
const bodyParser = require('body-parser')
const controllerHome = require('../home').controller
const controllerLoterias = require('../loterias').controller
// const controllerTermos = require('../termos').controller
const controllerAgenda = require('../agenda').controller
const controllerSobre = require('../sobre').controller
const controllerTermometro = require('../termometro').controller
const controllerQuemSomos = require('../quem_somos').controller
const controllerLogin = require('../login').controller


const apiTermos = require('../termos').controller
const apiLotofacil = require('../loterias/lotofacil').controller


let _app

const defineMiddlewares = (app) => {

	// Captura app express para reutilizar nas funcoes _auxiliares
	_app = app

	// _setSecurity()
	_setAssets()
	_setBodyParser()
	_setControllers()

	return app
}

const _setSecurity = () => {
	_app.use(token)
}

const _setAssets = () => {
	_app.use(express.static('public'))
}

const _setBodyParser = () => {
	_app.use('/termometro', bodyParser.json())
	_app.use('/login', bodyParser.urlencoded({}))

	_app.use('/api', bodyParser.json())
}

const _setControllers = () => {
	_app.use('/', controllerHome)
	_app.use('/loterias', controllerLoterias)
	// _app.use('/glossario', controllerTermos)
	_app.use('/agenda', controllerAgenda)
	_app.use('/sobre', controllerSobre)
	_app.use('/termometro', controllerTermometro)
	_app.use('/quem-somos', controllerQuemSomos)
	_app.use('/login', controllerLogin)

	_app.use('/api/termos', apiTermos)	
	_app.use('/api/lotofacil', apiLotofacil)	

}



module.exports = defineMiddlewares