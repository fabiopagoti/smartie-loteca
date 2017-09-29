const Lotofacil = require('./LotofacilSchema')
const express = require('express')
const router = express.Router()

const odd = require('odd')
const even = require('even')


const preparaLotofacil = (oConcurso) => {
	oConcurso.imparPar = {
		impar: odd(oConcurso.dezenas).length,
		par: even(oConcurso.dezenas).length
	}
	console.log(oConcurso)
	return oConcurso
}

// Query & Read
router.get('/', (req, res) =>  {

	let oQuery = {}

	if(req.query.concurso){
		oQuery.concurso = req.query.concurso
	}

	Lotofacil.find(oQuery, (err, aConcursos) => {
		res
		.status(200)
		.json({
			success: true,
			count: aConcursos.length,
			data: aConcursos
		})
	})	

})

// Create
router.post('/', (req, res) =>  {

	preparaLotofacil(req.body)

	let oConcurso = new Lotofacil(req.body)

	oConcurso.save((err, oNovoConcurso) => {

		if(err){

			let sErrorMessage
			switch(err.code){
				case 11000:
				sErrorMessage = 'Concurso já existente'
				break
				default: 
				sErrorMessage = 'Erro na criação do concurso'
				break
			}
			res
			.status(400)
			.json({
				success: false,
				message: sErrorMessage
			})
			return
		}

		res 	
		.status(201)
		.json({
			success: true,
			message: 'Concurso cadastrado com sucesso',
			data: oNovoConcurso
		})
	})

})

/************
* Termometro
*************/


const analisaDezenas = (aDezenas, res) => {
	let iImpares = odd(aDezenas).length
	let iPares = even(aDezenas).length

	Lotofacil.find({
		'imparPar.impar': iImpares
	}, 
	'-_id concurso dezenas',
	(err, aConcursos) => {

		Lotofacil.count({}, (err, noConcursos) => {

			res.json({
				dezenas: aDezenas,
				imparPar: {
					impares: iImpares,
					pares: iPares,
					frequencia : aConcursos.length / noConcursos * 100,
					concursos: aConcursos
				}
			})
		})
	})

	console.log('Finalizando analise')

}

router.post('/termometro', (req, res) => {
	let aDezenas = req.body.dezenas

	let oAnalise = analisaDezenas(aDezenas, res) 
})

router.get('/estatisticas', (req, res) => {
	let iNumero = req.query.numero
	console.log(iNumero)
	
	// Blog.$where('this.username.indexOf("val") !== -1').

	let oQuery = Lotofacil
		.find({},'-_id concurso dezenas')
		.$where(`this.dezenas.indexOf(${iNumero}) !== -1`)

	oQuery.exec((err, aConcursos) => {


		Lotofacil.count((err, count) => {

			res.json({
				count: aConcursos.length,
				frequencia: count === 0? 0: aConcursos.length / count * 100,
				concursos: aConcursos
			})
			
		})
		
	})
})

module.exports = router;















