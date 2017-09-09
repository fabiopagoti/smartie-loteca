function verificaAposta() {
	let aInputs = document.querySelectorAll('.input-numero')
	let aNumeros = []

	for (numero of aInputs) {
		if (numero.checked) {
			aNumeros.push(parseInt(numero.getAttribute('data-bola')))
		}
	}


	$.ajax({
			url: '/termometro',
			type: 'POST',
			contentType: 'application/json',
			// dataType: 'json',
			data: JSON.stringify(aNumeros),
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