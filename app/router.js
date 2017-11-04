/*************************
*	Rotas da Aplicacao
**************************/
const controllerHome = require('../home')
const controllerAjuda = require('../ajuda')
const controllerQuemSomos = require('../quem_somos')
const controllerLogin = require('../login')
const controllerCadastro = require('../cadastro')

// const controllerLoterias = require('../loterias').controller
// const controllerTermos = require('../termos').controller
// const controllerAgenda = require('../agenda').controller
// const controllerSobre = require('../sobre').controller
// const controllerTermometro = require('../termometro').controller

let app

function defineRouter(){
	app = this

	app.use('/', controllerHome)
	app.use('/ajuda', controllerAjuda)
	app.use('/quem-somos', controllerQuemSomos)
	app.use('/login', controllerLogin)
	app.use('/cadastro', controllerCadastro)

	// app.use('/loterias', controllerLoterias)
	// app.use('/glossario', controllerTermos)
	// app.use('/agenda', controllerAgenda)
	// app.use('/sobre', controllerSobre)
	// app.use('/termometro', controllerTermometro)
	// app.use('/api/termos', apiTermos)
	// app.use('/api/lotofacil', apiLotofacil)

	return this
}

module.exports = defineRouter
