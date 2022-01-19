// Objetos literales
const persona = {
	nombre: "Benjamín",
	apellido: "Ayala",
	edad: 29,
	domicilio:{
		pais: "México",
		estado: "Colima",
		municipio: "Manzanillo",
		calle: "San pedrito, sector 7 #570",
		cp: 28219,
	}
};

const persona2 = persona;
persona2.nombre = "Pedro"; // Este cambio en nombre de persona2, afectará también el nombre en persona.

const persona3 = { ... persona }
persona3.nombre = "Juan"; // Este cambio en nombre de persona3, no afectará el nombre en persona.

console.log(persona);
console.log(persona2);
console.log(persona3);