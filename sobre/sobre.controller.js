const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
	response.render('../sobre/sobre', {
		sobre: true
	})
})

module.exports = router;