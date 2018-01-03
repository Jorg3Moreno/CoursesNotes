const jorge = {
	nombre: 'Jorge',
	apellido: 'Moreno'
}

function saludar(veces, uppercase) {
	let str = `Hola ${this.nombre} ${this.apellido}`
	str = uppercase ? str.toUpperCase() : str
	for (let i = 0; i < veces; i++) {
		console.log(str)
	}
}

const params = [3, true]

//llamada usando call
saludar.call(jorge, ...params) // saludar.call(jorge, 3, true)


//llamada usando applu
saludar.apply(jorge, params) // saludar.apply(jorge, [3, true])
