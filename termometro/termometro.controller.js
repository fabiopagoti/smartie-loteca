const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
	response.render('../termometro/termometro', {
		termometro: true,
		numeros: {
			linha1: {
				no: ['01','02','03','04','05']
			},
			linha2: {
				no: ['06','07','08','09','10']
			},
			linha3: {
				no: [...Array(5).keys()].map(x => ++x + 10)
			},
			linha4: {
				no: [...Array(5).keys()].map(x => ++x + 15)
			},
			linha5: {
				no: [...Array(5).keys()].map(x => ++x + 20)
			},
		}
	})
})

router.post('/', (request, response) => {
	try {
		let oResult = controller.parImpar(request.body);
		let sUrl = url.format({
			pathname: '/resultado',
			query: oResult
		})
		response.send(sUrl)
	} catch (e) {
		response
		.status(400)
		.send(e.message)
	}
})

router.get('/resultado', (request, response) => {
	let oQuery = request.query
	if (oQuery.frequencia) {
		response.render('resultado', oQuery)
	} else {
		response.redirect('termometro')
	}
})

module.exports = router;