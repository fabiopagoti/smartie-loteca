const express = require('express')
const router = express.Router()
const controller = require('./sobre.controller.js')

router.get('/', (request, response) => {
	response.render('../sobre/sobre', {
		anonimo: true,
		sobre: true
	})
})

module.exports = router;