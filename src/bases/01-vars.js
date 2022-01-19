// Var, Let y Const
const nombre = "Tony";
const apellido = "Stark";
console.log({nombre, apellido});
if( true ){
	let nombre = "";
		nombre = "Peter";
	const apellido = "Parker";
	console.log({nombre, apellido});
	console.log({global});
}
var global = "Variable Global";