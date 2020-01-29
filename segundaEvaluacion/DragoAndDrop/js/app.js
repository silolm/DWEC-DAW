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

    document.querySelector('select').addEventListener("change", listaJugadores);
}

function getEquipos() {
    return fetch("http://localhost/DragoAndDrop/Api/equipos").
    then(resultados => resultados.json());
}

function getJugadores(equipo) {
    return fetch(`http://localhost/DragoAndDrop/Api/jugadores?equipo=${equipo}`).
    then(resultados => resultados.json());
}

async function listaEquipos() {
    let select = document.querySelector('select');
    let lista = new Set;
    let equipos = await getEquipos();

    equipos.forEach(element => {
        lista.add(element.Nombre);
    });

    lista.forEach(element => {
        let option = document.createElement('option');
        option.innerText = element;
        select.appendChild(option);
    });
}

async function listaJugadores() {
    let contenedor = document.getElementById('div1');
    contenedor.innerHTML = ``;
    let selector = document.getElementById('selectEquipos').value;
    let jugadores = await getJugadores(selector);

    jugadores.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('drag1');
        div.id = element.Nombre;
        div.setAttribute('draggable', true);
        div.addEventListener('dragstart', drag);
        div.innerText = element.Nombre;
        contenedor.appendChild(div);
    });
}

function init() {
    loadListeners();
    listaEquipos();
}

window.onload = init;