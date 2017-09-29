const expressJwt = require('express-jwt');

const aPublicUrls = [
'/',
'/sobre',
'/quem-somos',
'/login',
/\/css*/,
/\/js*/,
/\/img*/,
'/favicon.ico',
'/api/lotofacil/estatisticas'
]

const token = expressJwt({
	secret: 'dev-secret'
}).unless({
	path: aPublicUrls
})

module.exports = token 