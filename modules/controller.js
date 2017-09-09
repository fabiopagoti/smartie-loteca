/*************************
 *	Controller - Regras de Negocio
 **************************/
const odd = require('odd')
const even = require('even')


const _frequenciaImpar = {
	3: 0,
	4: 5,
	5: 36,
	6: 172,
	7: 403,
	8: 486,
	9: 319,
	10: 111,
	11: 21,
	12: 3,
	13: 0
}

const parImpar = (oBet) => {
	let oResult = {
		pares: 0,
		impares: 0,
		frequencia: 0
	}

	oResult.pares = even(oBet).length
	oResult.impares = odd(oBet).length

	if (oResult.pares + oResult.impares === 15) {
		oResult.frequencia = (_frequenciaImpar[oResult.impares] / 1556 * 100).toFixed(2)
		return oResult
	} else {
		throw new Error("Aposta deve possuir 15 números")
	}
}


module.exports.parImpar = parImpar