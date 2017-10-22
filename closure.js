//Recuerda el ultimo scope
const saludarFamilia = (apellido) => (nombre) => console.log(´Hola ${nombre} ${apellido}´)

const saludarGomez = saludarFamilia('Gomez')
const saludarPerez = saludarFamilia('Perez')

saludarGomez('Juan')
saludarPerez('Audrey')