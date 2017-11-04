const express = require('express')
const router = express.Router()
// const controller = require('./ajuda.controller.js')

router.get('/', (request, response) => {
	response.render('../ajuda/ajuda', {
		anonimo: true,
		ajuda: true
	})
})

module.exports = router