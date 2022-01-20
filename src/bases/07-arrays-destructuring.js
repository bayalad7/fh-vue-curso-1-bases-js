// Desestructuración de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks', 'Krilin'];

const [Goku, Vegeta, Trunks] = personajes;
console.log( Goku, Vegeta, Trunks );

const [ , , soloTrunks] = personajes;
console.log( soloTrunks );

const [ , , , Krilin = "No tiene valor" ] = personajes;
console.log( Krilin ); // No tiene valor

const informacionPersona = () =>{
	return ["Benjamín", "Ayala"]
}
const [nombre, apellido] = informacionPersona();
console.log( nombre, apellido ) // Benjamín Ayala

const informacionPersona2 = ([nombre, apellido]) => [nombre, apellido];
const [nombre2, apellido2] = informacionPersona2(["Orlando", "Ayala"]);
console.log( nombre2, apellido2 ) // Orlando Ayala
