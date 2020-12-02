$(function () {
    cargar();

    function cargar() {
        var i = Math.floor(Math.random() * 6);
        var j = Math.floor(Math.random() * 11);
        $("#foto").css({
            'top': -j * 118 + 'px',
            'left': -i * 128 + 'px'
        });
    }

    $(".draggable").draggable({stack: "img"});

    var angle = 0;
    $("img").click(rotar);
    $("img").bind("tap", rotar);

    function rotar() {
        angle += 45;
        $(this).css({
            'transform': 'rotate(' + angle + 'deg)'
        });
    };
});  
