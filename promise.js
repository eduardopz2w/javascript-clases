const handleError = err => console.log(err)

let luke

fetch('http://swapi.co/api/people/1/')
.then(response => response.json())
.then((json) => {
	luke = json
	return fetch(luke.homeworld)
})
.then(response => response.json())
.then((json) => {
	luke.homeworld = json
	console.log(´${luke.name} nacio el ${luke.homeworld.name}´)

})
.catch(err => handleError(err))