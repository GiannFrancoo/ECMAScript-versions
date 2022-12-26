// Objecto dentro de otro objeto
const users = {
    name: "Gian",
    hermano: {
        name: "Gino"
    }
}

console.log(users.hermano?.age);

// Uso ? para evitar que se rompa y logro que me devuelva undefined