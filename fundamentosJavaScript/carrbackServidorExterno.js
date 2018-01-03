function get(URL, callback) {
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		const DONE = 4
		const OK = 200
		if (this.readyState === DONE) {
			if (this.status === OK) {
				// todo ok
			} else {
				// hubo un error
			}
		}
	}
}