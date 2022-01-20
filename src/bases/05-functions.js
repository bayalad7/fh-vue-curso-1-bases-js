// Funciones normales

// Función normal que puede ser modificada
function saludo(nombre){
	console.log(`Hola ${nombre}!`);
}
saludo("Pedro");

// Función segura en una variable constante
const otroSaludo = function(nombre){
	console.log(`Hola ${nombre}!`);
}
otroSaludo("Juan");

// Función con referencia
function nuevoSaludo(nombre){
	console.log(`Hola ${nombre}!`);
}
const referenciaFuncion = nuevoSaludo;
referenciaFuncion("Pedro");

// Funciones de flecha
const elSaludo = (nombre) => console.log(`Hola ${nombre}!`);
elSaludo("Mariana");

// Funciones de flecha con retorno de objetos
const datosUsuario = () => { 
	return {
		id: 1,
		nombre: "Benjamín",
		apellido: "Ayala",
		usuario: "bayalad7"
	}
};

const otroUsuario = () => ({
	id: 2,
	nombre: "Pedro",
	apellido: "Lee",
	usuario: "pdl1"
});

console.log( datosUsuario() );
console.log( otroUsuario() );

const heroes = [{
	id: 1,
	nombre: "Batman"
},{
	id: 2,
	nombre: "Superman"
},{
	id: 3,
	nombre: "Spiderman"
},{
	id: 4,
	nombre: "Ironman"
},{
	id: 5,
	nombre: "Dr Strange"
}];

// Función de flecha con método some() que comprueba si al menos un elemento del arreglo cumple con la condición implementada por la función proporcionada.
// Existe heroe.id = 1
const encontro = heroes.some( (heroe) => heroe.id === 1 );
console.log({encontro}); // {encontro: true}

// Función de flecha con método find() que devuelve el valor del primer elemento del arreglo que cumple con la condición implementada por la función proporcionada.
// Buscar heroe.id = 1, si find no encuentra nada retornará undefined
const heroe = heroes.find( (heroe) => heroe.id === 1 );
console.log({heroe}); // heroe: {id: 1, nombre: 'Batman'}
console.log(heroe.nombre); // Batman

// Función de flecha con desestructuración de un objeto
const {nombre, id} = heroes.find( (heroe) => heroe.id === 1 );
console.log(id); // 1
console.log(nombre); // Batman