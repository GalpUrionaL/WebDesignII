/*let ocultarBtn = document.getElementById('ocultarBtn');

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
}*/

/**Usando JQuery */

// Ocultar parrafos
$(function() {
    let carusel = $('#carusel');
    let antes = $('#btn-antes');
    let despues = $('#btn-despues');

    // Mover el ultimo elemento
    $('#carusel div:last').insertBefore('#carusel div:first');

    // Mostrar la primera con
    carusel.css('margin-left', '-' + 100 + '%');

    // cuando se haga click en el boton anterior
    antes.on('click', function() {
        carusel.animate({
            marginLeft: 0
        }, 1000, function() {
            $('#carusel div:last').insertBefore('#carusel div:first')
            carusel.css('margin-left', '-' + 100 + '%');
        });
    });

    // cuando se haga click en el boton siguiente
    despues.on('click', function() {
        carusel.animate({
            marginLeft: '-' + 200 + '%'
        }, 1000, function() {
            $('#carusel div:first').insertAfter('#carusel div:last')
            carusel.css('margin-left', '-' + 100 + '%');
        });
    });

    $('#ocultarTexto').hide();
    $('#verBtn').hide();
    $('#ocultarBtn').click(function() {
        $('#ocultarTexto').show(function() {
            $('#ocultarBtn').hide();
            $('#verBtn').show(function() {
                $('#verBtn').click(function() {
                    $('#ocultarTexto').hide();
                    $('#verBtn').hide();
                    $('#ocultarBtn').show();
                });
            });
        });
    });
});