let ocultarBtn = document.getElementById('ocultarBtn');

let ocultarTexto = document.getElementById('ocultarTexto');

// agregamos un evento al boton
ocultarBtn.addEventListener('click', toggleText);

function toggleText() {
    ocultarTexto.classList.toggle('mostrar');

    // cambiar el texto del boton
    if (ocultarTexto.classList.contains('mostrar')) {
        ocultarBtn.innerHTML = 'Leer menos';
    } else {
        ocultarBtn.innerHTML = 'Leer más';
    }
}