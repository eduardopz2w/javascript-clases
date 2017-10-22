class Punto {
	constructor(x, y) {
		this.x = x
		this.y = y
	}

	moveX() {
		this.x += x
	}

	moveY() {
		thsi.y += y
	}

	distacia(p) {
		const x = this.x - p.x
		const y = this.y - p.y

		return Math.sqrt(x* x + y * y)
	}
}

const p1 = new Punto(0, 4)
const p2 = new Punto(3, 0)

console.log(p1.distacia(p2))
p1.moveX(10)
console.log(p1.x)