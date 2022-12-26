// Un ejemplo de que no se bloquea, es Asincronico, no espera que termina, sino que sigue ejecutando.
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Asincronico'),2000)
        : reject(new Error('Error chaval'));
    })
}

const anotherFn = async() => {
    const something  = await fnAsync();
    console.log(something);
    console.log('Hello');
} 

console.log('Antes');
anotherFn();
console.log('Después');
