// Desestructuración de objetos
const persona = {
	nombre: "Benjamín",
	apellido: "Ayala",
	edad: 29,
	apodo: "Benyi"
};
// console.log(persona.nombre); // Benjamín
// console.log(persona.apellido); // Ayala
// console.log(persona.edad); // 29
// console.log(persona.apodo); // Benyi

const { nombre, apellido, edad, apodo, altura, peso = '80kg' } = persona;
// console.log(nombre); // Benjamín
// console.log(apellido); // Ayala
// console.log(edad); // 29
// console.log(apodo); // Benyi
// console.log(altura); // undefined
// console.log(peso); // 80kg

// Desestructuración de los objetos en los argumentos de las funciones.
// 1. Desestructuración del objeto dentro de la función
const crearHeroe = ( persona ) => {
	const { nombre, apellido, edad, apodo, altura } = persona;
	return {
		id: Math.floor(Math.random() * 100),
		nombre: nombre,
		apellido: apellido,
		edad: edad,
		apodo: apodo,
		altura: altura
	};
};

// 2. Desestructuración del objeto desde los argumentos de la función.
const crearHeroe2 = ( { nombre, apellido:apellidoPaterno, edad, apodo, altura } ) => (
	// Cuando tenemos el caso en el que una propiedad tiene el mismo nombre que el nombre de una variable o constante que tengamos en nuestro código, podemos obviar la relación de la propiedad con el nombre de la variable. 
	// Relación de las propiedades con las variables constantes, los nombres serán las llaves y los valores serán lo que se tenga asignado en las variables constantes
	{
		id: Math.floor(Math.random() * 100),
		nombre,
		apellidoPaterno,
		edad,
		apodo,
		altura
	}
);
console.log( crearHeroe(persona) );
console.log( crearHeroe2(persona) );