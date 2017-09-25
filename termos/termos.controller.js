const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>  {
	res.render('../termos/termos')
})

module.exports = router;