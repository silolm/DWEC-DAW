window.onload = init;
let letraUsada = [];
let listaPalabras = ['Grinch', 'Gremlins', 'Elf'];
let palabraAdivinar = [];
let palabraMostrar = [];
let numIntentos = 5;


function init() {
    teclado();
    clickTeclado();
    mostrarPelicula();
    quitarNoel();
}

function quitarNoel() {
    //seleccionamos todas las Extremidades
    let piezas = document.querySelectorAll('.extremidad');

    //Y con el forEach lo que hacemos es añadirle un estilo que las OCULTE
    piezas.forEach(piezas => {
        piezas.style.visibility = 'hidden';
    });
}

function clickTeclado() {
    //seleccionamos todas las teclas para poder usarlas...
    let tecla = document.querySelectorAll('.tecla');

    //hacemos un forEach que recorra todas PARA que cuando pulsemos no solo nos pulse la A que es la primera...
    tecla.forEach(tecla => {
        //creamos un Oyente que al clicar nos guarde en un array las teclas que pulsamos
        tecla.addEventListener('click', () => {
            if (!letraUsada.includes(tecla.innerText)) {
                letraUsada += tecla.innerText;
                //cogemos el elemento padre y lo que hacemos es añadir un hijo al cual le insertamos las letras YA USADAS
                let usada = document.getElementById('letrasUsadas');
                let letra = document.createElement('div');
                letra.classList.add('letraUsada');

                letra.innerText = tecla.innerText;
                usada.appendChild(letra);
                ///////////////////////////////////
            }

        });
    });
}

function comprobarPalabrasYletras() {
    let letra = document.querySelector('#letrasUsadas');

    let letraUsuario = letra.value;
    letra.value = '';
    letra.focus();

    for (const [posicion, letraAdivinar] of palabraAdivinar.entries()) {
        if (letraUsuario === letraAdivinar) {
            palabraMostrar[posicion] = letraAdivinar;
        }
    }

    if (!palabraAdivinar.includes(letraUsuario)) {
        numIntentos -= 1;
        letraUsada.push(letraUsuario);
    }

    acabarJuego();
}

function mostrarPelicula() {
    //escogemos el padre TITULO y le añadimos un HIJO
    let titulo = document.getElementById('titulo');
    let miTitulo = document.createElement('div');
    miTitulo.classList.add('misTitulos');

    //Aleatoriamente escogemos las peliculas
    let posAleatoriaListaPalabras = Math.floor(Math.random() * listaPalabras.length);
    let palabraAleatoria = listaPalabras[posAleatoriaListaPalabras];

    //Y las mostramos sustituidas pos guiones
    for (let i = 0; i < palabraAleatoria.length; i++) {
        palabraMostrar += " _ ";
    }

    miTitulo.innerHTML = palabraAdivinar + "<br>" + palabraMostrar;
    titulo.appendChild(miTitulo);
}

function teclado() {
    let teclado = document.getElementById("teclado");
    let tecla;

    for (let teclaActual = 65; teclaActual <= 90; teclaActual++) {
        tecla = document.createElement("button");
        tecla.innerText = String.fromCharCode(teclaActual);
        tecla.classList.add("tecla");
        teclado.appendChild(tecla);
    }
}



function acabarJuego() {
    if (numIntentos === 0)
        alert('Has Perdido!!!');
}