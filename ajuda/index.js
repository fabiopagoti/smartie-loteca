const express = require('express')
const router = express.Router()
// const controller = require('./ajuda.controller.js')

router.get('/', (request, response) => {
	response.render('../ajuda/ajuda', {
		titulo: 'Ajuda',
		anonimo: request.session.userId ? false : true,
		ajuda: true,
	})
})

module.exports = router