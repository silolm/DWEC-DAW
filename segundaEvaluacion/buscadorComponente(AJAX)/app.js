function consulta(element) {
    // Obtener la instancia del objeto XMLHttpRequest
    let peticion_http = new XMLHttpRequest();

    // Preparar la función de respuesta
    peticion_http.onreadystatechange = mostrar;

    // Realizar petición HTTP
    peticion_http.open('GET',
        'http://www.omdbapi.com/?s=' + element + '&apikey=cbe010a6', true);


    //Datos a enviar al servidor en caso del método POST
    peticion_http.send(null);

    function mostrar() {
        let json;
        let padre;

        try {
            if (peticion_http.readyState === 4) {
                if (peticion_http.status === 200)
                    json = JSON.parse(peticion_http.responseText);
                else throw("ERROR TOTAL");
            }
        } catch (err) {
            console.error("ERROR: " + err);
            return;
        }

        padre = document.getElementById('resultados');
        padre.innerHTML = '';

        if (json === undefined) return;

        for (let i = 0; i < 5; i++) {
            let hijo = document.createElement('a');
            hijo.innerText = json.Search[i].Title;
            padre.appendChild(hijo);
        }
    }
}

function init() {
    let valorBusqueda = document.querySelector('#myInput');

    document.querySelector('#myInput').addEventListener('keyup', () => {
        consulta(valorBusqueda.value);
    });
}

window.onload = init;