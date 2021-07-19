// Declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var cboCategoria=document.getElementById("cboCategoria");
var txtPre=document.getElementById("txtPre");
var txtCan=document.getElementById("txtCan");
var btnRegistrar=document.getElementById("btnRegistrar");

// Creamos un procedimiento para mostrar
function MostrarProducto() {
    // Declaramos una viable para guardar los datos
    var listaproducto=Mostrar();
    // Selecciono el tbody de la tabla donde voy a mostrar la informacion
    var tbody=document.querySelector("#tbProducto tbody");
    tbody.innerHTML="";
    // Agregamos al tbody las filas que se registren
    for(var i=0;i<listaproducto.length;i++){
        // Declaramos una variables para las filas
        var fila=tbody.insertRow(i);
        // Declaramos variables para los titulos
        var titulonom=fila.insertcell(0);
        var titulocat=fila.insertcell(1);
        var titulopre=fila.insertcell(2);
        var titulocan=fila.insertcell(3);
        // Agregamos los valores
        titulonom.innerHTML=listaproducto[i].nombre;
        titulocat.innerHTML=listaproducto[i].categoria;
        titulopre.innerHTML=listaproducto[i].precio;
        titulocan.innerHTML=listaproducto[i].cantidad;
        tbody.appendChild(fila);
    }
}

// Creamos un procedimiento para registrar los datos
function RegistrarProducto() {
    // Validacion de datos
    // Capturando valores
    var nom=txtNom.Value;
    var cat="";
    var indice=cboCategoria.selectedIndex;
    switch(indice){
        case 1:
            cat="Entrenimiento";
            break;
        case 2:
            cat="Tecnologia";
            break;
        case 3:
            cat="Linea Blanca";
            break;
        default:
            cat="";
            break;
    }
    var pre=txtPre.Value;
    var can=txtCan.Value;
    // Llamamos al procedimiento registrar
    Registrar(nom,cat,pre,can);
    // Llamamos al procedimiento para mostrar
    MostrarProducto();
}

// Llamamos al procedimiento registrar en el evento del boton
btnRegistrar.addEventListener("click",RegistrarProducto);