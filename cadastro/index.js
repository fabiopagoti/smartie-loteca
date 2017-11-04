const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
	response.render('../cadastro/cadastro', {
		cadastro: true
	})
})

module.exports = router;