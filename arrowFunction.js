const plaform = (str) => {
	let translation = str

	if (str.toLowerCase().endsWith('ar')) {
		//desde el inicio corta dos caracteres
		translation = str.slice(0, -2)
	}

	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe'
	}
    
    //por que aqui ya hemos agregado caractesres a las palabras
    const length = translation.length

	if (length) {
		const firstHalf = translation.slice(0, Math.round(length / 2))
		// si no se manda segundo parametro lo toma hasta el final
		const secondHalf = translation.slice(Math.round(length / 2))

		translation = '${firstHalf}-${secondHalf}'
	}
    
	//reverse voltea todos los valores del array
    // join une todo los valores del arrya como un string
	const reverse = (str) => str.split('').reverse().join('')

	const minMay = (str) => {
		const length = str.length
		let translation = ''
		let capitalize = true

		for (let i = 0; i < length; i++) {
			//toma caracter segun el numero
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : cha.toLowerCase()
			capitalize = !capitalize
		}

		return translation
	}

	if (str == reverse(str)) {
		return minMay(str)
	}

	return translation
}


plaform('progamar')