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
		.done(function(a, b, c) {
			window.location = a;
		})
		.fail(function() {
			console.log('error');
		})
		.always(function(a, b, c) {

		});
}


function onClickNumero(oNumero) {
	// console.log(oNumero.classList)
return
	console.log('inicio')
	setTimeout(function() {
		// oNumero.classList.remove('focus')
		// oNumero.classList.remove('active')
		// document.querySelector('#contador').tabIndex = -1
		// document.querySelector('#contador').focus()
		// document.querySelector('#contador').select()
		// document.querySelector('#contador').click()
		//   	$(document.querySelector('#contador')).trigger('click');
		//   	$(document.querySelector('#contador')).trigger('touchstart');

		console.log('fim')
	}, 100);
	console.log('depois')

}