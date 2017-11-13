/*************************
*	Middlewares
**************************/

const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')

// const apiTermos = require('../termos').controller
// const apiLotofacil = require('../loterias/lotofacil').controller

let app

function defineMiddlewares() {
	app = this
	
	_setHelmet()
	_setAssets()
	_setBodyParser()
	_setCookieParser()
	_setExpressSession()

	return this
}

const _setHelmet = () => {
	app.use(helmet())
}

function _setAssets(){
	app.use(express.static('public'))
	app.use(express.static('node_modules/material-components-web/dist/'))
	
}

function _setBodyParser(){
	app.use(['/cadastro', '/login'], bodyParser.urlencoded({ extended: true }))
	app.use('/', bodyParser.json())
}

function _setCookieParser(){
	app.use(cookieParser())
}

function _setExpressSession(){
	app.use(expressSession({
		name: 'smartie',
		secret: 'secret2',
		resave: true,
		saveUninitialized: false
	}));
}


module.exports = defineMiddlewares