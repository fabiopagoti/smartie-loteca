const moment = require('moment')

exports.times = (n, block) => {
	let accum = '';
	for (let i = 1; i <= n; i++) {
		accum += block.fn(i);
	}
	return accum;
}

exports.formataDiasDaSemana = (aDias, block) => {
	moment.locale('pt-BR');
	let accum = ''
	for(iDia of aDias){
		accum += block.fn(moment().isoWeekday(iDia).format('dddd'))
	}
	return accum

}