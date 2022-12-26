
function* iterate(array){
    for (let value of array) {
        yield value;        
    }
}

const it = iterate(["Gian", "Oscar", "David"]);
console.log(it.next().value);
console.log(it.next().value); // Me muestra el segundo, guarda el estado!
// undefined si se pasa


function* idGenerator(){
    let value = 0;
    while(true){
        yield value++;
    }
}

const it2 = idGenerator();
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);
console.log(it2.next().value);