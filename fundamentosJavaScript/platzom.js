function platzom(str) {
	let translation = str

	//si la palabra original es un palíndromo, ninguna regla anterior cuenta y
	// se devuelve la mismma palabra intercalando mayusculas y minusculas 

	const reverseStr = (str) => str.split('').reverse().join('')

	function minMay (str) {
		let capitalize = true
		let translation = ''

		for (let i = 0; i < str.length; i++) {
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}

	if (str == reverseStr(str) ) {
		return minMay(str)
	}
	
	//si la palabra termina en "ar", se quitan esos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2)
	}

	//si la palabra inicia con Z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe'
	}

	//si translation tiene 10 o mas letras,
	//se debe parti a la mitad y unir con un guion
	if (translation.length >= 10) {
		const firstHalf = translation.slice(0, Math.round(translation.length / 2))
		const secondHalf = translation.slice(Math.round(translation.length / 2))
		translation = `${firstHalf}-${secondHalf}`
	}

	return translation
}

console.log(platzom('programar')) //program
console.log(platzom('zorro')) //zorrope
console.log(platzom('zarpar')) //zarppe
console.log(platzom('abecedario')) //zarppe
console.log(platzom('sometemos')) //zarppe