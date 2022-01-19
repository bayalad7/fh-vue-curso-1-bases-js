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