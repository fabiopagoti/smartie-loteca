const express = require('express')
const router = express.Router()


router.get('/', (request, response) => {
	response.render('../home/home', {
		home: true
	})
})

module.exports = router;