/*************************
*	Middlewares
**************************/

const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')

// const apiTermos = require('../termos').controller
// const apiLotofacil = require('../loterias/lotofacil').controller

let app

function defineMiddlewares() {
	app = this
	
	// _setSecurity()
	_setAssets()
	_setBodyParser()
	_setControllers()

	return this
}

const _setSecurity = () => {
	
}

function _setAssets(){
	app.use(express.static('public'))
	app.use(express.static('node_modules/material-components-web/dist/'))
	
}

function _setBodyParser(){
	app.use('/login', bodyParser.urlencoded({ extended: true }))
	app.use('/', bodyParser.json())
}

function _setControllers(){

}



module.exports = defineMiddlewares