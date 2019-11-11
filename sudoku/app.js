window.onload = init;

let mapa = [];

function init() {
    let juego = document.querySelector('.tablero');

    for (let i = 1; i < 10; i++) {
        mapa[i] = [];
        for (let j = 0; j < 9; j++) {
            let div = document.createElement('div');

            div.classList.add('casilla');

            mapa[i][j] = div;
            juego.appendChild(div);
        }
    }

}