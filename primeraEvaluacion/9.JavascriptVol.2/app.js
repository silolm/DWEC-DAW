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

function reseteoMapa() {
    alert('Ganaste');
    document.querySelector('.tablero').innerHTML = '';
    crearMapa();
}

function comprobarGanador() {

    //HORIZONTAL
    for (let i = 0; i < mapa.length; i++) {
        let contadorX = 0;
        let contadorO = 0;

        for (let j = 0; j < mapa[i].length; j++) {
            if (mapa[i][j].classList.contains('O'))
                contadorO++;
            else if (mapa[i][j].classList.contains('X'))
                contadorX++;

            if (contadorX === 3) {
                reseteoMapa();
            } else if (contadorO === 3) {
                reseteoMapa();
            } else if ((contadorO + contadorX - mapa.length) < 2)
                reseteoMapa();
        }
    }

    //VERTICAL
    for (let i = 0; i < mapa.length; i++) {
        let contadorX = 0;
        let contadorO = 0;

        for (let j = 0; j < mapa[i].length; j++) {
            if (mapa[j][i].classList.contains('O'))
                contadorO++;
            else if (mapa[j][i].classList.contains('X'))
                contadorX++;

            if (contadorX === 3) {
                reseteoMapa();
            } else if (contadorO === 3) {
                reseteoMapa();
            }
        }
    }

    // DIAGONAL
    let contadorXDiagX = 0;
    let contadorXDiagO = 0;

    for (let i = 0; i < 3; i++) {
        if (mapa[i][i].classList.contains('O'))
            contadorXDiagO++;
        else if (mapa[i][i].classList.contains('X'))
            contadorXDiagX++;

        if (contadorXDiagX === 3) {
            reseteoMapa();
        } else if (contadorXDiagO === 3) {
            reseteoMapa();
        }

    }

    contadorXDiagO = 0;
    contadorXDiagX = 0;

    for (let i = 0; i < 3; i++) {
        if (mapa[i][2 - i].classList.contains('O'))
            contadorXDiagO++;
        else if (mapa[i][2 - i].classList.contains('X'))
            contadorXDiagX++;

        if (contadorXDiagX === 3) {
            reseteoMapa();
        } else if (contadorXDiagO === 3) {
            reseteoMapa();
        }
    }

}

function click() {
    if (!this.classList.contains('X') && !this.classList.contains('O'))
        this.classList.add('X');

    let movimientoOponente = false;
    let contador = 0;

    while (!movimientoOponente && contador <= 8) {
        let posY = Math.floor(Math.random() * 3);
        let posX = Math.floor(Math.random() * 3);

        if (!mapa[posY][posX].classList.contains("X") && !mapa[posY][posX].classList.contains("O")) {
            mapa[posY][posX].classList.add("O");
            movimientoOponente = true;
        }
        contador++;
    }

    comprobarGanador();
}