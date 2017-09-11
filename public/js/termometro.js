function verificaAposta() {
	let aNumeros = document.querySelectorAll('.numero-area')
	let aNumerosSelecionados = []
	let bSelecionado
	let iNumero

	for (oNumero of aNumeros) {
		bSelecionado = oNumero.getAttribute('data-selecionado')
		if (bSelecionado == 'true') {
			iNumero = oNumero.getAttribute('data-numero')
			aNumerosSelecionados.push(parseInt(iNumero))
		}
	}


	$.ajax({
			url: '/termometro',
			type: 'POST',
			contentType: 'application/json',
			data: JSON.stringify(aNumerosSelecionados),
		})
		.done(function(a) {
			window.location = a;
		})
		.fail(function(e) {
			alert(e.responseText);
		});
}


function onClickNumero(oNumero) {
	let bSelecionado = oNumero.getAttribute('data-selecionado')
	if (bSelecionado == 'false') {
		oNumero.setAttribute('data-selecionado', true)
	} else {
		oNumero.setAttribute('data-selecionado', false)
	}
}