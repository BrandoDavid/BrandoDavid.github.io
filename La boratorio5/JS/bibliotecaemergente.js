// creamos una funcion para cuando cargue el documento
function Cargar(url,titulo,ancho,alto) {
    // Declaramos variables para calcular el ancho y alto de la pantalla
    var anc=screen.width;
    var alt=screen.height;
    // alert(anc);
    // alert(alt);
    // Declaramos variables para la posicion
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    // alert(x);
    // alert(y);
    window.open(url,titulo,"width="+ancho+", height="+alto+",left="+x+",top="+y+", scrollbars=No");
}

// Llamamos a la funcion cargar
window.onload=Cargar("pagina4.html","Ventana Emergente",400,400);