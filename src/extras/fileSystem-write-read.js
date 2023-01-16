const fs = require('fs');
const rutaArchivo = __dirname + '/prueba.txt';

// Escribiendo y leyendo de un archivo de forma Sincrona.

function leer(ruta, cb){
  fs.readFile(ruta, (err, data) => {
      cb(data.toString());
  })
}

function escribir(ruta, contenido){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.writeFile(ruta, contenido, function (err){
        if (err){
          reject('No he podido escribir el contenido en el archivo:' + err);
        }
        else{
          resolve('Fue escrito con éxito');
        }
      })
    }, 1000)  
  })
}

function borrar(ruta,cb){
  fs.unlink(ruta, cb);
}

async function main(){
  await escribir(rutaArchivo, "Creando un nuevo archivo")
          .then(console.log);
  leer(rutaArchivo, console.log);
  // await borrar(rutaArchivo, console.log);
}

main();