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
    document.getElementById("div1").addEventListener("dragover", allowDrop);
    document.getElementById("div2").addEventListener("dragover", allowDrop);
    document.getElementById("drag1").addEventListener("dragstart", drag);
    document.getElementById("div2").addEventListener("drop", drop);
    document.getElementById("div1").addEventListener("drop", drop);
}

function init() {
    loadListeners();
}

window.onload = init;