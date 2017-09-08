'use strict'

const express = require('express')

let _app

const defineMiddlewares = (app) => {

	// Captura app express para reutilizar nas funcoes _auxiliares
	_app = app

	_setAssets()

	return app
}

const _setAssets = () => {
	_app.use(express.static('public'))
}


module.exports = defineMiddlewares