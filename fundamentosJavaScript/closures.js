function saludarFamilia(apellido) {
	return function saludarMiembro (nombre) {
		console.log(`Hola ${nombre} ${apellido}`)
	}
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarPerez("Perez")

saludarGomez("Pedro")


////// EJEMPLO

function makePrefixer(prefijo) {
	return function generar(word) {
		console.log(`${prefijo}${word}`)
	}
}

const makePrefixer = prefijo => word => console.log(`${prefijo}${word}`)

const prefijoRe = makePrefixer("re")
prefijoRe("malo")