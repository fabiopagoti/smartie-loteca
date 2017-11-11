const express = require('express')
const router = express.Router()
const controller = require('./meus_jogos.controller.js')

router.get('/', (request, response) => {
	response.render('../meus_jogos/meus_jogos', {
		logado: true,
		meusJogos: true
	})
})

module.exports = router;