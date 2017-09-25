const mongoose = require('mongoose')
const Termo = require('./TermosSchema')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>  {

	Termo.find({}, (err, termos) => {
		res.render('../termos/termos', {
			glossario: termos
		})
	})

})

module.exports = router;