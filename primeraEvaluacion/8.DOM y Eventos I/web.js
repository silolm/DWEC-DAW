function inShadow(aux) {
    aux.style.boxShadow = "inset 3px 4px 5px black";
    aux.style.borderRadius = "160px";
    aux.onmouseout = "";
    aux.onmousedown = "";
    aux.onmouseup = "";
}

function hiddeShadow(aux) {
    aux.style.boxShadow = "0";
}

function noCirculo(aux) {
    aux.style.borderRadius = "";
}

function circulo(aux) {
    aux.style.borderRadius = "300px";
    aux.style.transition = "border-radius 1s";
}

function recoveryShadow(aux) {
    aux.style.boxShadow = "3px 4px 5px";
}

function eliminar(borrar, color) {
    var container = document.getElementById(color);
    var padre = container.parentNode;
    var elementosBorrar = document.getElementsByClassName(borrar.dataset.polla);
    container.style.transition = "width 0.5s";
    container.style.width = "0px";
    setTimeout(function () {
        elementosBorrar[0].parentNode.removeChild(elementosBorrar[0]);
        elementosBorrar[0].parentNode.removeChild(elementosBorrar[0]);
    }, 1000);





}