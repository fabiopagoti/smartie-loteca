function showMessage(){		
	
	var oErrorMessage = document.querySelector('.error-message')
	var sMessage = document.querySelector('.mdc-snackbar__text').textContent
	if(sMessage){
		snackbar.show({
			message: sMessage
		})
	}
	
}

document.addEventListener('DOMContentLoaded', function() {
	showMessage()
})

const snackbar = mdc.snackbar.MDCSnackbar.attachTo(document.querySelector('.mdc-snackbar'));
