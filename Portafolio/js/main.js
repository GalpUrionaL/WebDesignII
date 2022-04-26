/**Aplicando JQuery */

$(function() {
    $('.tituloh').each(function(index, elemento) {
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            'top': '70px'
        }, 1500);
    });
    $('.perfil').hide();
    $('.tareas').hide();
    $('.perfilP').click(function() {
        $('.perfil').toggle(2000);
    });
    $('.actividades').click(function() {
        $('.tareas').toggle(2000);
    });
});