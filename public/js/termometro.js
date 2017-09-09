function verificaAposta() {
	let aInputs = document.querySelectorAll('.input-numero')
	let aNumerosSelecionados = []

	for (numero of aInputs) {
		if (numero.checked) {
			aNumerosSelecionados.push(parseInt(numero.getAttribute('data-bola')))
		}
	}


	$.ajax({
			url: '/termometro',
			type: 'POST',
			contentType: 'application/json',
			// dataType: 'json',
			data: JSON.stringify(aNumerosSelecionados),
		})
		.done(function(a,b,c) {
			window.location = a;
		})
		.fail(function() {
			console.log('error');
		})
		.always(function(a,b,c) {

		});
}
