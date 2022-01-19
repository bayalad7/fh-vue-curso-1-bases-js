// Arreglos
const numeros = [1, 2, 3, 4, 5];

/*
	Al hacer push en el arreglo, JS no marca error en la constante,
	por qué no estamos manipulando a lo que apunta en memoria la constante.
	Sino que estamos utilizando un método propio del arreglo,
	una función que se encuentra dentro del prototipo de los arreglos.
*/
numeros.push(6);

/*
	Caso contrario aquí, JS marcará el error en la constante,
	ya que estamos tratando de reasignar el valor de la constante.
*/
// numeros = [1, 2, 3, 4, 5, 6];

const masNumeros = numeros;
masNumeros.push(7); // Este cambio en masNumeros, afectará también al arreglo de numeros.

const otrosNumeros = [...numeros];
otrosNumeros.push(8); // Este cambio en otrosNumeros, no afectará al arreglo de numeros y masNumeros.

// La función map de un arreglo llama a una función de devolución de llamada definida en cada uno de los elementos de un arreglo y devuelve un arreglo que contiene los resultados.
// En pocas palabras la función map recorre/itera cada uno de los elementos dentro de un arreglo y cambia el valor de los elementos dependiendo lo que se le indique
const multiplicaNumeros = numeros.map( (numero) => numero * 2);
multiplicaNumeros.push(100);
console.log(numeros); // [1, 2, 3, 4, 5, 6, 7]
console.log(masNumeros); // [1, 2, 3, 4, 5, 6, 7]
console.log(otrosNumeros); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(multiplicaNumeros); // [2, 4, 6, 8, 10, 12, 14, 100]