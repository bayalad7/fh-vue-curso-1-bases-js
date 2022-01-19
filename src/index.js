// Plantillas literales
const nombre = "Benjamín";
const apellido = "Ayala";
const nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;
console.log({nombreCompleto});
console.log(`Resultado de la suma: ${3+4}`);

const saludar = (nombre) => `Hola ${nombre}`;
console.log(`Este es un mensaje de Juan: ${saludar("Benjamín")}`);