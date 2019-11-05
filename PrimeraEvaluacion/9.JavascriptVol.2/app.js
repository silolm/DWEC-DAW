let mapa = [];

function crearMapa() {
    let juego = document.querySelector('.tablero');

    for (let i = 0; i < 3; i++) {
        mapa[i] = [];
        for (let j = 0; j < 3; j++) {
            let div = document.createElement('div');

            div.classList.add('casilla');
            div.addEventListener('click', click);

            mapa[i][j] = div;
            juego.appendChild(div);
        }
    }
}
crearMapa();


function click(div) {

    if (!this.classList.contains('X')) {
        this.classList.add('X');
    }

}