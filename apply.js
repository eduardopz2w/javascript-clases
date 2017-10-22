const sacha = {
	name: 'Sacha',
	lastName: 'Lifszyc'
}


 function saludar (veces, upperCase) {
 	let str = ´Hola ${this.name} ${this.lastName}´
 	str = upperCase ? str.upperCase() : str
	for (let i = 0; i< veces; i++) {
		console.log()
	}
}

// la invoca inmediatamente pasandole el context y luego los parametros
saludar.call(sacha, 3, true)


//funcion igual q call pero los parametros se pasarn como array
const params = [3 ,true]

saludar.apply(sacha, ...params)