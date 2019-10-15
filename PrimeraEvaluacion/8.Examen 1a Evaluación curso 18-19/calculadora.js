// declaracion de variables
let operador = false;
let estaVacio = true;
let esEntero = true;
let esParentesis = true;
let resultado = false;

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
    document.getElementById("resultado").addEventListener('click', generarResultado);
});

function insertarOperador(caracter) {
    if (!operador) {
        let screen = document.getElementById('screen');

        // añadimos a la screen el OPERADOR, puesto que el último dígito no es un operador.
        screen.value += caracter;

        // al añadir un OPERADOR cambiamos las variables de abajo para cumplir con las restricciones a la hora de escribir.
        operador = true;
        esEntero = true;
        estaVacio = true;

        screen.value += "0";
    }
}

function insertarNumero(caracter) {
    let screen = document.getElementById('screen');

    if (resultado) borradoTotal();

    if (caracter === "()") {
        if (esParentesis) {
            caracter = "(0";
            esParentesis = false;
        } else {
            if (estaVacio) return;
            caracter = ")";
            esParentesis = true;
        }
    }

    if (estaVacio && caracter !== ".") screen.value = screen.value.substring(0, screen.value.length - 1) + caracter;
    else if (!(!esEntero && caracter === ".")) screen.value += caracter;

    if (caracter === "(0") estaVacio = true;

    if (estaVacio && (caracter !== "0" && caracter !== "." && caracter !== "(0")) estaVacio = false;
    if (caracter === "." && esEntero) {
        esEntero = false;
        estaVacio = true;
        screen.value += "0";
    }

    operador = false;
}

function eliminar() {
    let screen = document.getElementById('screen');

    if (screen.value.length > 0) {
        let contenido = screen.value;

        if (contenido.length === 1) {
            screen.value = "0";
            estaVacio = true;
        } else screen.value = contenido.substring(0, contenido.length - 1);

        operador = !!esOperador(screen.value.slice(-1));
        if (!esEntero) esEntero = contenido.slice(-1) === ".";
        esParentesis = contenido.slice(-1) !== ")";
    }
}

function borradoTotal() {
    document.getElementById('screen').value = "0";
    operador = false;
    estaVacio = true;
    esEntero = true;
    esParentesis = true;
    resultado = false;
}

function esOperador(caracter) {
    let arrayDeOperadores = ['+', '-', 'x', '/', '%'];

    return arrayDeOperadores.indexOf(caracter) !== -1;
}

function generarResultado() {
    if (esParentesis && !estaVacio && !operador) {
        let screen = document.getElementById('screen');
        screen.value = eval(screen.value.replace("x", "*"));
        resultado = true;
        estaVacio = true;
    }
}