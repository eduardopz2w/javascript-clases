let vidaGoku = 100
let vidaSuperman = 100


const MIN_POWER = 5
const MAX_POWER = 12

let round = 0

const ambosVivos = (vidaGoku, vidaSuperman) => vidaGoku > 0 && vidaSuperman >0
const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)  

while(ambosVivos(vidaGoku, vidaSuperman)) {
	round++
	console.log(´Round ${round}´)

	const golpeGoku calcularGolpe()
	const golpeSuperman = calcularGolpe()

	if (golpeGoku > golpeSuperman) {
		console.log(´Goku ataca a superman con un golpe de ${golpeGoku}´)
		vidaSuperman -= golpeGoku
		console.log(´Super vida ${vidaSuperman}´)
	} else {
		console.log('superman ataca')
		vidaGoku -= golpeSuperman
		console.log(´vida gokue ${vidaGoku}´)
	}
}


if (gokuVive()) {
	console.log(´goku gana vida ${vidaGoku}´)
} else {
	console.log(´superman gan ${vidaSuperman}´)
}

