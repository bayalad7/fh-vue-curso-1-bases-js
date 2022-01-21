// Promesas
console.log("Inicio");
new Promise( (resolve, reject) => {
	console.log("Cuerpo de la promesa");
	const exito = false;
	if( exito )
		resolve({estado:"Ok", mensaje: "Promesa resuelta correctamente"});
	else
		reject({estado:"Error", mensaje: "Promesa resuelta con error"});
})
.then( console.log ) // {estado: 'Ok', mensaje: 'Promesa resuelta correctamente'}
.catch( console.log ); // {estado: 'Error', mensaje: 'Promesa resuelta con error'}
console.log("Fin");