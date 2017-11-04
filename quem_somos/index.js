const express = require('express')
const router = express.Router()
const controller = require('./quem_somos.controller.js')

router.get('/', (request, response) => {
	response.render('../quem_somos/quem_somos', {
		anonimo: true,
		quemSomos: true
	})
})

module.exports = router;