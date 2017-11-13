/*************************
*	Rotas da Aplicacao
**************************/
const routerHome = require('../home')
const routerAjuda = require('../ajuda')
const routerQuemSomos = require('../quem_somos')
const routerLogin = require('../login')
const routerCadastro = require('../cadastro')
const routerSobre = require('../sobre')

const routerDashboard = require('../dashboard')
const routerMeusJogos = require('../meus_jogos')

let app

function defineRouter(){
	app = this

	// Rotas Anonimas
	app.use('/', routerHome)
	app.use('/login', routerLogin)
	app.use('/cadastro', routerCadastro)
	
	// Rotas Comuns
	app.use('/sobre', routerSobre)
	app.use('/ajuda', routerAjuda)
	app.use('/quem-somos', routerQuemSomos)

	// Rotas autentidas
	app.use('/meusJogos', routerMeusJogos)
	app.use('/dashboard', routerDashboard)
	// app.use('/loterias', routerLoterias)
	// app.use('/glossario', routerTermos)
	// app.use('/agenda', routerAgenda)
	// app.use('/termometro', routerTermometro)
	// app.use('/api/termos', apiTermos)
	// app.use('/api/lotofacil', apiLotofacil)

	return this
}

module.exports = defineRouter
