let video;
let off;
let mute;

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

function bajarVol() {
    video.volume;
}

function init() {
    video = document.querySelector('video');
    off = true;
    mute = false;

    document.querySelector('#silenciar').addEventListener("click", mutear);

    document.querySelector('#restar10segundos').addEventListener("click", retroceder);

    document.querySelector('#playPause').addEventListener("click", iniciar);

    document.querySelector('#sumar10segundos').addEventListener("click", avanzar);

    document.querySelector('#reiniciar').addEventListener("click", refresco);

    document.querySelector('#bajarVol').addEventListener("click", bajarVol);

    document.querySelector('#subirVol').addEventListener("click", subirVol);

}

window.onload = init;