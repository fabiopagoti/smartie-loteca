const express = require('express')
const router = express.Router()
const controller = require('./home.controller.js')


router.get('/', (request, response) => {
	console.log('HOME')
	console.log(request.session.userId)
	
	if(request.session.userId){
		response.redirect('/dashboard')
		return
	}

	response.render('../home/home', {
		titulo: null,
		anonimo: true,
		home: true
	})
})

module.exports = router;