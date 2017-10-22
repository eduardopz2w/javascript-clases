const nombre = 'Wilmer'
const dias = [
  'lunes',
  'martes',
  'miercoles',
  'juves',
  'viernes',
  'sabado',
  'domingo'
]

// Math.random devuelve un valor entre 0  y 1
// Math.floor redondea hacia abajo
// Math.ceil redondea hacia arriba
// Math.round redondea dependiendo 3.1 = 3, 3.5 = 4
const correr = () => {
	const min = 5
	const max = 15
	return Math.round(Math.random() * (max - min)+ min)
}

let totalKms = 0;

const length = dias.length

for (let i = 0; i < length; i++) {
	const kms = correr()
	totalKms += kms
	console.log('El dis ${i} es el ${dias[i]} ${nombre} corrio ${kms} kms')
}

const promedio =  totalKms / dias.length
console.log('En promedio, ${nombre} corrio ${promedio}')