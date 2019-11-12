window.onload = init;

let mapa = [];
let sudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

function crearMapa() {
    let juego = document.querySelector('.tablero');

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let div = document.createElement('div');
            div.addEventListener('click', () => {
                div.contentEditable = true;
                let numero = document.getElementsByTagName('div')[2].innerText;

                if (/^[1-9]$/.test(numero))
                    console.log("true");
                else {
                    console.log('polla');
                    console.log(numero);
                }
            });
            div.classList.add('casilla');
 
            div.innerText = 'i: ' + i + "\n j: " + j; //añadir sudoku a las posiciones del tablero;
            juego.appendChild(div);


        }
    }
}

function comprobar3x3(numero, posY, posX) {

    while (posY % 3 != 0) {
        posY--;
    }
    while (posittionJ % 3 != 0) {
        posX--;
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

        }
    }

}

function comprobarFila(numero, posY, posX) {

}

function comprobarColumna(numero, posY, posX) {

}

function init() {
    crearMapa();
}