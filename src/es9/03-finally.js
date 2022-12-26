
//Resume: es como un try catch.

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!');
        }
        else{
            reject('Not worked');
        }
    } )
}

anotherFunction()
    .then(Response => console.log(Response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finally')); // Agrega como este flag para saber si termino o no.