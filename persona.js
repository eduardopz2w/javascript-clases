class Persona {
	constructor(nombre, amigos = []) {
		this.nombre = nombre
		this.amigos = amigos
	}

	listarAmigos() {
		const _this = this
		this.amigos.forEach( function(amigo) = {
			console.log(´Hola el es ${_this.nombre} ${amigo}´)
		})
	}
}


class Persona {
	constructor(nombre, amigos = []) {
		this.nombre = nombre
		this.amigos = amigos
	}

	listarAmigos() {
		this.amigos.forEach( function(amigo) = {
			console.log(´Hola el es ${this.nombre} ${amigo}´)
		}.bind(this))
	}
}


class Persona {
	constructor(nombre, amigos = []) {
		this.nombre = nombre
		this.amigos = amigos
	}

	listarAmigos() {
		this.amigos.forEach(amigo => console.log(´Hola el es ${this.nombre} ${amigo}´))
	}
}

const yo = new Persona('Wilmer', ['Farles', 'Richard'])