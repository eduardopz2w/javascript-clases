function fibonacci(){
	//Closure
	let a = 0, b = 1
	return{
		next: function() {
		 let f = a
		 a = b
		 b = f + a
		 return{ value: f, done: false}
		}
	}
}

const fibo = fibonacci()

fibo.next().value // 1
fibo.next().value // 2


//Forma dos

function fibonacci(){
	//Closure
	let a = 0, b = 1
	return{
		next: function() {
		 let f = a
		 a = b
		 b = f + a
		 return{ value: f, done: false}
		}
	}
}

const fibo = {}
//Javascript lo interpreta como un iterator
fibo[Symbol.iterator] = fibonacci 

let i = 0
for (let value of fibo) {
	console.log(value)
	i++
	if(i>20) break
}
