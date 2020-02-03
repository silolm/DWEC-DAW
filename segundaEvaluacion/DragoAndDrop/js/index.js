let equipo = document.getElementsByTagName('equipo');
let jugador = document.getElementsByTagName('nombre');

function allowDrop(ev) {
    //Permitir que reciba algún elemento
    ev.preventDefault();
}

function drag(ev) {
    //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();

    //Guardamos el elemento, llamado "text" en una variable.
    let data = ev.dataTransfer.getData("text");

    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
    ev.target.appendChild(document.getElementById(data));
}

function loadListeners() {
    document.getElementById('div1').addEventListener('dragover', allowDrop);
    document.getElementById('div2').addEventListener('dragover', allowDrop);
    document.getElementById('div2').addEventListener('drop', drop);
    document.getElementById('div1').addEventListener('drop', drop);

    document.getElementById('selectEquipos').addEventListener("change", listaJugadores);
    document.getElementById('selectEquipos2').addEventListener("change", listaJugadores);
}

async function getEquipos() {
    const resultados = await fetch(`http://localhost/DragoAndDrop/Api/equipos`);
    return await resultados.json();
}

async function getJugadores(equipo) {
    const resultados = await fetch(`http://localhost/DragoAndDrop/Api/jugadores/read.php?equipo=${equipo}`);
    return await resultados.json();
}

function setJugadores(equipo, jugador) {
    let datos = {
        equipo: equipo,
        jugador: jugador
    };
    (async () => {
        const rawResponse = await fetch(`http://localhost/DragoAndDrop/Api/jugadores/update.php`, {
            method: 'POST',
            body: JSON.stringify(datos),
        });
        const content = rawResponse;
    })();
}

async function listaEquipos() {
    let select = document.getElementById('selectEquipos');
    let select2 = document.getElementById('selectEquipos2');
    let lista = new Set;
    let equipos = await getEquipos();

    equipos.forEach(element => {
        lista.add(element.Nombre);
    });

    lista.forEach(element => {
        let option = document.createElement('option');
        let option2 = document.createElement('option');
        option.innerText = element;
        option2.innerText = element;
        select.appendChild(option);
        select2.appendChild(option2);
    });

    await listaJugadores();
}

async function listaJugadores() {
    let contenedorIzquierda = document.getElementById('div1');
    contenedorIzquierda.innerHTML = ``;
    let contenedorDerecha = document.getElementById('div2');
    contenedorDerecha.innerHTML = ``;
    let selector = document.querySelector('select').value;
    let jugadores = await getJugadores(selector);

    jugadores.forEach(element => {
        let divL = document.createElement('div');
        divL.innerHTML = `
        <div class="drag1" nombre="${element.Nombre}" equipo="${element.Equipo}" draggable="true">${element.Nombre}</div>
        `;
        let divR = document.createElement('div');
        divR.innerHTML = `
        <div class="drag2" draggable="true">${element.Nombre}</div>
        `;
        divL.addEventListener('dragstart', drag);
        divR.addEventListener('dragstart', drag);
        contenedorIzquierda.appendChild(divL);
        contenedorDerecha.appendChild(divR);
    });
}

function init() {
    loadListeners();
    listaEquipos();
}

window.onload = init;