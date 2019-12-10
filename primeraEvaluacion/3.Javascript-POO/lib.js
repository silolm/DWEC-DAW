//cada libro, el título, autor, país e isbn.

export default class Libro {

    constructor(título = "", autor = "", país = "", isbn = 0) {
        this.título = título;
        this.autor = autor;
        this.país = país;
        this.isbn = isbn;
    }

    toString(){
        return this.título + " "+ this.autor;
    }
}