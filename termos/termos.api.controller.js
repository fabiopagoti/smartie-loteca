const Termo = require('./TermosSchema')
const express = require('express')
const router = express.Router()


// Query
router.get('/', (req, res) =>  {

	Termo.find({}, 'termo definicao', (err, aTermos) => {
		res
		.status(200)
		.json({
			success: true,
			count: aTermos.length,
			data: aTermos
		})
	})	

})

// Create
router.post('/', (req, res) =>  {

	let oTermo = new Termo(req.body)

	oTermo.save((err, oNovoTermo) => {

		if(err){

			let sErrorMessage
			switch(err.code){
				case 11000:
				sErrorMessage = 'Termo já existente'
				break
				default: 
				sErrorMessage = 'Erro na criação do termo'
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
			message: 'Termo criado com sucesso',
			data: oNovoTermo
		})
	})

})


// Update
router.put('/:id', (req, res) =>  {
	const sId = req.params.id
	const oTermo = req.body

	Termo.findByIdAndUpdate(
		sId, 
		oTermo,
		{
			runValidators: true
		}, 
		(err, oTermoAtualizado) => {
			if(err){
				res
				.status(400)
				.json({
					success: false,
					message: err.message
				})
				return
			}
			res
			.status(200)
			.json({
				success: true,
				message: 'Termo atualizado com sucesso'
			})

		})

})


// Delete
router.delete('/:id', (req, res) =>  {
	const sId = req.params.id
	Termo.findById(sId, (err, oTermo) => {

		if(!oTermo){
			res 
			.status(400)
			.json({
				success: false,
				message: 'Termo não encontrado'
			})
			return
		}

		oTermo.remove((err) => {
			if(err){
				res 
				.status(400)
				.json({
					success: false,
					message: err.message
				})
				return
			}

			res
			.status(200)
			.json({
				success: true,
				message: 'Termo deletado com sucesso'
			})
			
		})
		
	})
})



module.exports = router;