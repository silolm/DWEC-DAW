let video;
let off;
let mute;
let reproductor;

function iniciar() {
    if (off) {
        video.play();
        off = false;
    } else {
        video.pause();
        off = true;
    }
}

function mutear() {
    mute = !mute;
    video.muted = mute;
}

function retroceder() {
    video.currentTime -= 10;
}

function avanzar() {
    video.currentTime += 10;
}

function refresco() {
    video.load();
}

function volumen(ev) {
   reproductor.volume = ev.currentTarget.value;
}

function init() {
    video = document.querySelector('video');
    off = true;
    mute = false;
    reproductor = document.getElementById('reproductor');

    document.querySelector('#silenciar').addEventListener("click", mutear);

    document.querySelector('#restar10segundos').addEventListener("click", retroceder);

    document.querySelector('#playPause').addEventListener("click", iniciar);

    document.querySelector('#sumar10segundos').addEventListener("click", avanzar);

    document.querySelector('#reiniciar').addEventListener("click", refresco);

    document.querySelector('#slider').addEventListener("change", volumen);
}

window.onload = init;