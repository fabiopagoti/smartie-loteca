const jwt = require('express-jwt');

const aPublicUrls = [
'/',
'/sobre',
'/quem-somos',
'/login',
/\/css*/,
/\/js*/,
/\/img*/
]

const token = jwt({
	secret: 'a'
}).unless({
	path: aPublicUrls
})

module.exports = token 