function openLink(iPessoa, iLink){
	var sLink;
	switch(iPessoa){
		case 1: // Amanda

		switch(iLink){
			case 1: // GitHub
			sLink = 'https://github.com/amandaprotasio'
			break
			case 2: // Linkedin
			sLink = 'https://www.linkedin.com/in/amandaprotasio/'
			break
		}
		break

		case 2: // Fabio

		switch(iLink){
			case 1: // GitHub
			sLink = 'https://github.com/fabiopagoti'
			break
			case 2: // Linkedin
			sLink = 'https://www.linkedin.com/in/fabiopagoti/'
			break
		}
		break
	}

	window.open(sLink)

}