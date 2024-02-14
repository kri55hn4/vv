$(document).ready(function(){
    var pageOpen = false;

    function openPage() {
        // Animación de desvanecimiento de los elementos del sobre
        $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
        $('.envelope').fadeOut(800, function() {
            // Ocultar elementos dentro de .valentines-day
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // Hacer visible la carta con una animación ondulante
            $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
            $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
                var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
                $(this).css('transform', 'scale(' + scale + ')');
            }}); // Animación de ondulación
        });
    }

    function closePage() {
        // Animación de cierre de la carta
        $('#card').animate({'opacity': 0}, {duration: 1000, step: function(now, fx) {
            var scale = 1 - Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno inversa
            $(this).css('transform', 'scale(' + scale + ')');
        }, complete: function() {
            $('#card').css({'visibility':'hidden'});
            // Mostrar elementos dentro de .valentines-day
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').show();
            // Reiniciar animación de apertura de sobre
            $('.envelope').show().css({'animation':'none', '-webkit-animation':'none'}).height();
            $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
        }}); // Animación de ondulación inversa
    }

    $(document).on('click', '.valentines-day', function() {
        if (!pageOpen) {
            openPage();
            pageOpen = true;
        } else {
            if (confirm("Do you want to close the page?")) {
                closePage();
                pageOpen = false;
            }
        }
    });
});
