function suma(...numeros) {
	return numeros.reduce(function (acum, numero, i) {
		acum += numero
		return acum
	}, 0)
}

const suma = (...numeros) => numeros.reduce( (acum, numero, i) => acum += numero)
suma(4, 8, 12, 8954, 7)

// function dobles(...numeros) {
// 	const resultado = []

// 	for (let i = 0; i < numeros.length; i++) {
// 		resultado.push(numeros[i] * 2)
// 	}

// 	return resultado
// }

function dobles(...numeros) {
	return numeros.map(function (numero) {
		return numero * 2
	})
}

const dobles = (...numeros) => numeros.map(numero => numero * 2)
dobles(4, 8, 12, 8954, 7)


// function pares(...numeros) {
// 	const resultado = []
// 	const length = numeros.length
// 	for (let i = 0; i < numeros.length; i++) {
// 		const numero = numeros[i]
// 		if (numero % 2 == 0) {
// 			resultado.push(numero)
// 		}
// 	}
// 	return resultado
// }

const pares = (...numeros) => numeros.filter( numero => numero % 2 == 0)
pares(2, 3, 5, 10)