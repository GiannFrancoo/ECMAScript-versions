const button = document.getElementById('btn');

button.addEventListener("click",async function(){
    const module = await import('./module.js');
    console.log(module);
    module.hello();
})

// Al hacerlo asyncronico no lo carga hasta que no le de click al boton
// Es decir, va a buscar el module, pero cuando le de click, sino no lo carga