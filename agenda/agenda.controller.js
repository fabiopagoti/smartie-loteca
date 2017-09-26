const express = require('express')
const jwt = require('express-jwt');
const token = require('../login/token')

const router = express.Router()

router.use(token)
router.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.redirect('/login')
  }
});

router.get('/', (req, res) =>  {
	res.render('../agenda/agenda')
})

module.exports = router;