/*************************
*	Rotas da Aplicacao
**************************/
const controllerHome = require('../home')
const controllerAjuda = require('../ajuda')
const controllerQuemSomos = require('../quem_somos')
const controllerLogin = require('../login')
const controllerCadastro = require('../cadastro')
const controllerSobre = require('../sobre')

// const controllerLoterias = require('../loterias').controller
// const controllerTermos = require('../termos').controller
// const controllerAgenda = require('../agenda').controller
// const controllerTermometro = require('../termometro').controller

let app

function defineRouter(){
	app = this

	app.use('/', controllerHome)
	app.use('/login', controllerLogin)
	app.use('/cadastro', controllerCadastro)
	app.use('/sobre', controllerSobre)
	app.use('/ajuda', controllerAjuda)
	app.use('/quem-somos', controllerQuemSomos)

	app.get('/cookie', (req, res) => {
		res.cookie('biscoito', { a: 2})
		res.send('ok')
	})

	// app.use('/loterias', controllerLoterias)
	// app.use('/glossario', controllerTermos)
	// app.use('/agenda', controllerAgenda)
	// app.use('/termometro', controllerTermometro)
	// app.use('/api/termos', apiTermos)
	// app.use('/api/lotofacil', apiLotofacil)

	return this
}

module.exports = defineRouter
