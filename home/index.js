const express = require('express')
const router = express.Router()
const controller = require('./home.controller.js')


router.get('/', (request, response) => {
	response.render('../home/home', {
		anonimo: true,
		home: true
	})
})

module.exports = router;