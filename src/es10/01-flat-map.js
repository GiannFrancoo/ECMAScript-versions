// Matriz de sub matriz "Aplanar"

const array = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]];
console.log(array.flat(3)); // Le paso la profundidad;

// flatmap
const array2 = [1, 2, 3];
console.log(array2.flatMap(v => [v, v * 2]));