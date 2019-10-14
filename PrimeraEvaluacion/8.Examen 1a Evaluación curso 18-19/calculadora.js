// declaracion de variables

let operador = false;
let estaVacio = true;
let esEntero = true;
let esParentesis = true;

window.addEventListener('load', () => {

    // relacionar eventos del HTML con las funciones.

    // los FOR son para las clases debido a que captan un ARRAY de éstas.

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

    // los GETelement son para los ID ya que solo captan un unico elemento.

    document.getElementById("borradoTotal").addEventListener('click', borradoTotal);
    document.getElementById("borrar").addEventListener('click', eliminar);
});

function insertarOperador(caracter) {
    if (!operador) {
        // añadimos a la screen el OPERADOR, puesto que el último dígito no es un operador.
        document.getElementById('screen').value += caracter;

        // al añadir un OPERADOR cambiamos las variables de abajo para cumplir con las restricciones a la hora de escribir.
        operador = true;
        esEntero = true;
    }
}

function insertarNumero(caracter) {
    if (caracter == "()") {
        if (esParentesis) {
            caracter = "(";
            esParentesis = false;
        } else {
            caracter = ")";
            esParentesis = true;
        }
    }

    if (estaVacio && caracter !== ".") document.getElementById('screen').value = caracter;
    else if (!(!esEntero && caracter == ".")) document.getElementById('screen').value += caracter;

    if (estaVacio && caracter !== "0") estaVacio = false;
    if (caracter == ".") esEntero = false;

    operador = false;
}

function eliminar() {
    if (!estaVacio) {
        let contenido = document.getElementById('screen').value;

        if (contenido.length == 1) {
            document.getElementById('screen').value = "0";
            estaVacio = true;
        } else document.getElementById('screen').value = contenido.substring(0, contenido.length - 1);

        operador = !!esOperador(document.getElementById('screen').value.slice(-1));

        if (!esEntero) esEntero = contenido.slice(-1) == ".";
    }
}

function borradoTotal() {
    document.getElementById('screen').value = "0";
    operador = false;
    estaVacio = true;
    esEntero = true;
    esParentesis = true;
}

function esOperador(caracter) {
    let arrayDeOperadores = ['+', '-', 'x', '/', '%'];

    return arrayDeOperadores.indexOf(caracter) !== -1;
}

