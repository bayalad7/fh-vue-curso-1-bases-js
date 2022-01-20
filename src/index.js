// Importaciones y exportaciones

// Importación y exportación de un elemento.
// import {comics} from './data/heroes';
// const [DC, Marvel] = comics;
// console.log( DC, Marvel );

// Importación y exportación por defecto.
// import superHeroes from './data/heroes';
// console.log( superHeroes );

// Importaciones de funciones
import {obtenerHeroePorID, obtenerHeroesPorComic} from './bases/08-imports-exports';
// Heroes por Id
console.log( obtenerHeroePorID(1) );
console.log( obtenerHeroePorID(2) );
console.log( obtenerHeroePorID(3) );
console.log( obtenerHeroePorID(4) );
console.log( obtenerHeroePorID(5) );
// Heroes por Comic
console.log( obtenerHeroesPorComic("DC") );
console.log( obtenerHeroesPorComic("Marvel") );