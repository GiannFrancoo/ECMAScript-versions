function newUser(name, age){
    var name = name || 'Gian';
    var age = age || 24;
    console.log(name, age);
}

newUser();
newUser("David",15);


// Asignación por defecto;
function newAdmin(name = "Gian", age = "24"){
    console.log(name, age);
}
newAdmin();
newAdmin("David", "15");