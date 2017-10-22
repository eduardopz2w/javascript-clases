/*Fórmula para sacar la distancia entre dos puntos :
D = √(x2 - x1) ^ 2 + (y2 - y1) ^2
*/

// x siempre es el primer valor, (y) es el segundo
// y = (0, 4)
// x = (3, 0) 
const Punto = (x, y) => {
	this.x = x
	this.y = y
}

// se pone nombre en la funcion para indentificarla
Punto.prototype.moveX = function moveX(x) {
    this.x += x
}

Punto.prototype.moveX = function moveY(y) {
    this.y += y
}

Punto.prototype.distacia = function(p) {
	const x = this.x - p.x
	const y = this.y - p.y
    
    // sqrte saca la raiz cuadrada
	return Math.sqrt(x* x + y * y)
}

const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)



/*const p1 = {
	x: 0,
	y: 4,
	moveX(x) {
		this.x += x
	},

	moveY(y) {
		this.y += y
	}
}


const p2 = {
	x: 3,
	y: 0,
	moveX(x) {
		this.x += x
	},

	moveY(y) {
		this.y += y
	}
}*/


// se restan los valores en x , y luego en (y) de las dos medidas
// a cada uno de esos valores se les saca el cuadrado y se devuelve el resultado
/*const distacia = (p1, p2) => {
	const x = p1.x - p2.x
	const y = p1.y - p2.y
    
    // sqrte saca la raiz cuadrada
	return Math.sqrt(x* x + y * y)
}*/


console.log(p1.distacia(p2))
p1.moveX(10)
console.log(p1.x)


