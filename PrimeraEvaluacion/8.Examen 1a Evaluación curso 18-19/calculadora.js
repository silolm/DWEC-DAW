let operador = false;
let estaVacio = true;

window.addEventListener('load', () => {

    for (let boton of document.querySelectorAll(".operador")) {
        boton.addEventListener('click', () => {
            insertarOperador(boton.innerText.trim());
        });
    }
    for (let boton of document.querySelectorAll(".numero")) {
        boton.addEventListener('click', () => {
            insertarNumero(boton.innerText.trim());
        });
    }

    document.getElementById("borrar").addEventListener('click', eliminar);
});

function insertarOperador(caracter) {
    if (!operador) {
        operador = true;
        document.getElementById('screen').value += caracter;
    }

}

function insertarNumero(caracter) {
    if (estaVacio) document.getElementById('screen').value = caracter;
    else document.getElementById('screen').value += caracter;

    operador = false;
    estaVacio = false;
}

function eliminar(caracter) {
    if (!estaVacio) {
        let contenido = document.getElementById('screen').value;

        if (contenido.length == 1) {
            document.getElementById('screen').value = "0";
            estaVacio = true;
        } else document.getElementById('screen').value = contenido.substring(0, contenido.length - 1);
    }
}

function esOperador(caracter) {
     
}

