let mapa = [];

function crearMapa() {
    let juego = document.querySelector('.tablero');

    for (let i = 0; i < 3; i++) {
        mapa[i] = [];
        for (let j = 0; j < 3; j++) {
            let div = document.createElement('div');

            div.classList.add('casilla');

            mapa[i][j] = div;
            juego.appendChild(div);
        }
    }

}
crearMapa();