//Cada cliente tendrá su nombre, dirección, dni y teléfono

export class Cliente {

    constructor(nombre = "", dirección = "", dni = "", teléfono = 0) {
        this.nombre = nombre;
        this.dirección = dirección;
        this.dni = dni;
        this.teléfono = teléfono;
    }
}

