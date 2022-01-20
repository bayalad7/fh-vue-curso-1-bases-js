// Importaciones y exportaciones

// Importación y exportación de un elemento.
import {comics} from './data/heroes';
const [DC, Marvel] = comics;
console.log( DC, Marvel );

// Importación y exportación por defecto.
import superHeroes from './data/heroes';
console.log( superHeroes );