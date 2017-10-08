const express = require('express')

const router = express.Router()

router.get('/', (req, res) =>  {
	res.render('../ajuda/ajuda')
})

module.exports = router;