
//Archivo de prueba...

async function segunda (){
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve("2");
    }, 1000)
  })
}

async function tercera (){
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve("3")
    }, 500)
  })
}

async function main() {
  console.log("1");
  
  await segunda()
          .then(resultado => console.log(resultado));
  
  await tercera()
    .then(resultado => console.log(resultado));

}

main();


