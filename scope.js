const name = 'Wilmer'

//El valor de name es el de parametro
const saludo = (name) => {
	console.log(´Hola ${name}´)
}


const other = () => {
	//El valor es el de la variable local 
	const name = 'Juan'
	console.log(´hola ${name}´)
}

saludo('Eduardo')


