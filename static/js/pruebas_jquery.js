/**
 * Created by saraygutierrez on 24/08/14.
 */
$(document).ready(function(){
    console.log('El documento está preparado');
    $('#uno')
        .find('h3')
        .eq(2)
        .html('nuevo texto')
        .end()
        .eq(0)
        .html('primer elemento')
    ;

    var hola = $('h3').html();
    console.log(hola);
    var tama = $('h3').css('fontSize');
    console.log(tama);
    $('h3').width('50px');

    $('#uno li:first').clone().appendTo('ul');
    $('ul').append('<li>item de la lista</li>');

    $('#uno a:first').attr({
        href : 'http://google.com',
        target : '_blank'
    });
});