// elementos q se suman en una suma son los sumandos
const sumas = (...numbers) => numbers.reduce((acum, number) => acum += number, 0) //dentro metermos  un acumulador y el valor q va iterando  
	
suma(4, 8, 12, 1 ,6)

//recibe una function q se va ejecutar por cada elemento y genera un nuevo array, siver para cambiar valores, genera un nuevo array cambiando los valores
const dobles = (...numbers) =>  numbers.map((number) => number * 2)

const porDos = dobles(2 ,5 ,10)


//descarta numer para ir filitrando, cuando la condicion es true lo introduce, si es false lo descarta

const pares = (...numbers) =>  numbers.filter((n) => n % 2 == 0)

const soloPares = pares(2, 4 ,5, 7, 8, 11)


[
  'lunes',
  'martes',
  'miércoles'
].forEach(function (dia) {
  console.log(dia)
})