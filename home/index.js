const express = require('express')
const router = express.Router()
const controller = require('./home.controller.js')


router.get('/', (request, response) => {
	console.log('GET HOME')
	console.log(request.session)
	
	if(request.session.userId){
		response.redirect('/dashboard')
		return
	}

	response.render('../home/home', {
		anonimo: true,
		home: true
	})
})

module.exports = router;