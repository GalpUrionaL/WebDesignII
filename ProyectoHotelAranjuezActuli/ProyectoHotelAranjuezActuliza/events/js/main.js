/**Usando JQuery */

$(function() {
    $('#todasF').hide();
    $('#amenidadesF').hide();
    $('#vestibuloF').hide();
    $('#reunionesF').hide();
    $('.menuFotos').each(function(index, elemento) {
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            'top': '0px'
        }, 2000);
    });
    $('#todas').click(function() {
        $('#todasF').toggle(1550);
    });
    $('#amenidades').click(function() {
        $('#amenidadesF').toggle(1550);
    });
    $('#vestibulo').click(function() {
        $('#vestibuloF').toggle(1550);
    });
    $('#reuniones').click(function() {
        $('#reunionesF').toggle(1550);
    });

});