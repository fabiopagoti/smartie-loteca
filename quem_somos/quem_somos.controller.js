const express = require('express')
const router = express.Router()


router.get('/', (request, response) => {
	response.render('../quem_somos/quem_somos', {
		quemSomos: true
	})
})

module.exports = router;