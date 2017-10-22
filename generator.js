function* fibonacci(){
	//Closure
	let a = 0, b = 1

	while (true) {
		 let f = a
		 a = b
		 b = f + a
         
         // yield  retorna ese valo y ejecuta la siguiente linea, en este caso el while ya q es true
		 let reset = yield f
		 if (reset) a = 0, b = 1
		
	}
}

const fibo = fibonacci()
// Comandos para la ejecución en la consola
fibo 
fibo.next()

// valor q se le envia al yield y lo retorna a la variable reset si no sera undefiend
fibo.next(true)