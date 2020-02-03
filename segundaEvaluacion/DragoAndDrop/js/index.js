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

    let selector = document.getElementById('selectEquipos2');
    let equipo = selector.options[selector.selectedIndex].value;
    setJugadores(equipo, data);

    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
    ev.target.appendChild(document.getElementById(data));
}

function loadListeners() {
    document.getElementById('div1').addEventListener('dragover', allowDrop);
    document.getElementById('div2').addEventListener('dragover', allowDrop);
    document.getElementById('div2').addEventListener('drop', drop);
    document.getElementById('div1').addEventListener('drop', drop);

    let left = document.getElementById('selectEquipos');
    let contenedorIzquierda = document.getElementById('div1');
    left.addEventListener("change", () => eventosCaja(left.options[left.selectedIndex].value, contenedorIzquierda));

    let right = document.getElementById('selectEquipos2');
    let contenedorDerecha = document.getElementById('div2');
    right.addEventListener("change", () => eventosCaja(right.options[right.selectedIndex].value, contenedorDerecha));
}

async function getEquipos() {
    const resultados = await fetch(`http://localhost/DragoAndDrop/Api/equipos`);
    return await resultados.json();
}

async function getJugadores(equipo) {
    const resultados = await fetch(`http://localhost/DragoAndDrop/Api/jugadores/read.php?equipo=${equipo}`);
    return await resultados.json();
}

async function setJugadores(equipo, codigo) {
    let datos = {
        equipo: equipo,
        codigo: codigo
    };
    await fetch(`http://localhost/DragoAndDrop/Api/jugadores/update.php`, {
        method: 'POST',
        body: JSON.stringify(datos),
    });
    
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
    contenedorIzquierda.innerHTML = insertarHtml(jugadores);
    contenedorDerecha.innerHTML = insertarHtml(jugadores);

    document.querySelectorAll('.drag').forEach((divDrag) => {
        divDrag.addEventListener('dragstart', drag);
    });
}

async function eventosCaja(valor, contenedor) {
    contenedor.innerHTML = '';
    let jugadores = await getJugadores(valor);
    contenedor.innerHTML = insertarHtml(jugadores);

    contenedor.querySelectorAll('.drag').forEach((divDrag) => {
        divDrag.addEventListener('dragstart', drag);
    });
}

function insertarHtml(jugadores) {
    let html = '';
    jugadores.forEach(element => {
        html += `    
            <div class="drag" id="${element.Codigo}" equipo="${element.Equipo}" draggable="true">${element.Nombre}</div>
        `;
    });
    return html;
}

function init() {
    loadListeners();
    listaEquipos();
}

window.onload = init;