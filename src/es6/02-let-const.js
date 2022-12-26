const fruits = () => {
    if (true){
        var fruit1 = "banana"; //Scope global
        let fruit2 = "kiwi"; // Solo lo ve en el bloque
        const fruit3 = "apple" // Solo en el bloque también
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

