const express = require('express')
const router = express.Router()
const controller = require('./quem_somos.controller.js')

router.get('/', (request, response) => {
	response.render('../quem_somos/quem_somos', {
		titulo: 'Quem somos',
		anonimo: request.session.userId ? false : true,
		quemSomos: true,
		partials: {
			scripts: '<script src="js/pages/quem_somos/quem_somos-scripts.js"></script>'
		}
	})
})

module.exports = router;