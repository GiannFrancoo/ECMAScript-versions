import fetch from "node-fetch";

// Antes que usar la función async para esto, con esto de top-level-await no hace falta

const response = await fetch('https://api.escuelajs.co/api/v1/products');
const products = await response.json();

// Si les saco los awaits va a tener el problema de querer convertirlo a json sin que este completo!
// se rompe si se los saco

export { products };