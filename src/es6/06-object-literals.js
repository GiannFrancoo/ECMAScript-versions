// enahced object literals

// Genera un objeto en base a los parametros.
function newUser(user, age){
    return {
        user, // asigna por defectos si el nombre es igual.
        edad: age, 
    }
}

console.log(newUser("Gian", 24));
