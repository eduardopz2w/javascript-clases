const handleError = err => console.log(err)


async function getLuke() {
	try {
		let luke
	  // fetch devuelve una promesa , y await espera a q se cumpla es promesa
   const response = await fetch('http://swapi.co/api/people/1/')

   //.json() devuelva una promesa
   const json = await response.json()
   const responseHomeWorld = await fetch(luke.homeworld)

   luke.homerworld = await responseHomeWorld.json()
	 console.log(´${luke.name} nacio el ${luke.homeworld.name}´)
	} catch(err) {
		handleError(err)
	}

}

