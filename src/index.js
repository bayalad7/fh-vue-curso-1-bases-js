// Promesas
// console.log("Inicio");
// new Promise( (resolve, reject) => {
// 	console.log("Cuerpo de la promesa");
// 	const exito = false;
// 	if( exito )
// 		resolve({estado:"Ok", mensaje: "Promesa resuelta correctamente"});
// 	else
// 		reject({estado:"Error", mensaje: "Promesa resuelta con error"});
// })
// .then( console.log ) // {estado: 'Ok', mensaje: 'Promesa resuelta correctamente'}
// .catch( console.log ); // {estado: 'Error', mensaje: 'Promesa resuelta con error'}
// console.log("Fin");

import {obtenerHeroePorID} from './bases/08-imports-exports';

const obtenerHeroPorIdAsincrono = ( id ) => new Promise( (resolve, reject) => {
	setTimeout(() => {
		const heroe = obtenerHeroePorID( id );
		if( heroe )
			resolve( heroe )
		else
			reject("El héroe no existe");
	}, 1000);
});

obtenerHeroPorIdAsincrono( 4 )
.then( (heroe) => {
	console.log( `El héroe es: ${heroe.nombre}` );
})
.catch( console.log )