const Puntos = {
	init(x, y) {
		this.x = x
		this.y = y
	},

	moveX(x) {
		this.x += x
	},

	moveY(y) {
		this.y += y
	},

	distancia(p) {
	   const x = this.x - p.x
	   const y = this.y - p.y
    
	   return Math.sqrt(x* x + y * y)
	}
}

const p1 = Object.create(Punto)
const p2 = Object.create(Punto)

p1.init(0, 4)
p2.init(3, 0)

console.log(p1.distacia(p2))
p1.moveX(10)
console.log(p1.x)