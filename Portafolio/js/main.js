/**Aplicando JQuery */

$(function() {
    $('.tituloh').each(function(index, elemento) {
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            'top': '20px'
        }, 1500);
    });
    $('.perfil').hide();
    $('.tareas').hide();
    $('.perfilP').click(function() {
        $('.perfil').toggle();
    })
});