const express = require('express')
const router = express.Router()
const lotofacil = require('./data/lotofacil.json')
const megasena = require('./data/megasena.json')

router.get('/', (request, response) => {
	response.render('../loterias/loterias-home', {
		loterias: [
			{
				nome: 'Mega-Sena'		
			},
			{
				nome: 'Lotofácil'	
			},
			{
				nome: 'Quina'		
			}

		]
	})
})

router.get('/:loteria', (request, response) => {
	let sLoteria = request.params.loteria
	switch (sLoteria) {
		case "lotofacil":
		response.render('../loterias/loterias', {
			estatisticas: true,
			loteria: lotofacil
		})
		break

		case "megasena":
		response.render('../loterias/loterias', {
			estatisticas: true,
			loteria: megasena
		})
		break

		default:
		response.render('../estatisticas/estatisticas', {
			estatisticas: true
		})
		break
	}
})



module.exports = router;