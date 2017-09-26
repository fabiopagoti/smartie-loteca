const express = require('express')
const token = require('./token')

const router = express.Router()

router.get('/', (request, response) => {
	response.render('../login/login', {
		login: true
	})
})

router.post('/', (request, response) => {

	// console.log(token)
	response.send({
		message: 'ok'
		// token: token
	})
})



module.exports = router