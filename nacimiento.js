const nacimiento = new Date(1993, 6, 10)
const hoy = new Date()

// nos da el valor en milisegundos
const tiempo = hoy - nacimiento

// si lo queremos en segundos, es asi por q en cada segundo hay 1000 milisegundos
const tiempoSegundos = tiempo / 1000


//minutos lo dividimos en 60 por que cada minutos tiene 60 segundos
const tiempoMin = tiempoSegundos / 60

//por que cada hora tiene 60 minutos
const timpoHoras = tiempoMin / 60

const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())


const dias = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado'
]

dias[proximoCumple]
