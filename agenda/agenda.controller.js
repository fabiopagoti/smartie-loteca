const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>  {
	res.render('../agenda/agenda')
})

module.exports = router;