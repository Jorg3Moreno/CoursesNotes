function get(URL, callback) {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		const DONE = 4
		const OK = 200
		if (this.readyState === DONE) {
			if (this.status === OK) {
				// todo ok
				callback(null, JSON.parse(this.responseText))
			} else {
				// hubo un error
				callback(new Error(`Se ha producido un error al realizar el request: ${this.status}.`))
			}
		}
	}

	xhr.open('GET', URL);
	xhr.send(null);
}

function handleError(err) {
	console.log(`Request failed: ${err}`)
}

get('https://swapi.co/api/people/1/', function onResponse(err, luke) {
	if (err) return handleError(err)
	console.log(`Request succeded`)
	console.log(`luke`, luke)
})

// ==========================
//
// USANDO PROMESAS
//
//===========================

function get(URL) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function() {
			const DONE = 4
			const OK = 200
			if (this.readyState === DONE) {
				if (this.status === OK) {
					// todo ok
					resolve(JSON.parse(this.responseText))
				} else {
					// hubo un error
					reject(new Error(`Se ha producido un error al realizar el request: ${this.status}.`))
				}
			}
		}

		xhr.open('GET', URL);
		xhr.send(null);
	})
}

function handleError(err) {
	console.log(`Request failed: ${err}`)
}

let luke

// we can use fetch instead get
get('https://swapi.co/api/people/1/')
	.then ((response) => {
		luke = response
		return get(luke.homeworld)
	})
	.then((homeworld) => {
		luke.homeworld = homeworld
		console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
	})
	.catch((err) => {
		handleError(err)
	})



// using fetch
var lukeFetch;
fetch('https://swapi.co/api/people/1/')
	.then ((response) => 
		//return response on JSON format
		response.json())
	.then(json => {
		lukeFetch = json;
		return fetch(luke.homeworld)
	})
	.then(response => response.json())
	.then((json) => {
		luke.homeworld = json
		console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
	})
	.catch((err) => {
		handleError(err)
	})