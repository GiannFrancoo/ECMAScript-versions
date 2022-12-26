const promise1 = new Promise((resolve, reject) => reject("Rejectado"));
const promise2 = new Promise((resolve, reject) => resolve("Resolvido(?"));
const promise3 = new Promise((resolve, reject) => resolve("Resuelto"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));

// Respuesta de la primera que sea satisfactoria
// Si vas a consumir varias APIS para get de información podrias quedarte con la primera que ande ;)