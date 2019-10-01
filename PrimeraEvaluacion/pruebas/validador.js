var guardar = "";

function validarNombre(Nombre) {
    if (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(Nombre.value)) {
        console.log("true");
    } else {
        Nombre.style.backgroundColor = "red";
    }
}

function validarCorreo(Correo) {
    if (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(Correo.value)) {
        console.log("true");
    } else {
        Correo.style.backgroundColor = "red";
    }
}

function validarDNI(DNI) {
    if (/^(\d{8})([A-Z])$/.test(DNI.value)) {
        console.log("true");
    } else {
        DNI.style.backgroundColor = "red";
    }
}

function validarContrasenya(Contrasenya) {
    if (/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(Contrasenya.value)) {
        console.log("true");
        guardar = Contrasenya.value;
    } else {
        Contrasenya.style.backgroundColor = "red";
    }
}

function repetirContrasenya(Contrasenya) {
    if (guardar == Contrasenya) {
        console.log("true");
    } else {
        Contrasenya.style.backgroundColor = "red";
    }
}

function validarIP(IP) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(IP.value)) {
        console.log("true");
    } else {
        IP.style.backgroundColor = "red";
    }
}