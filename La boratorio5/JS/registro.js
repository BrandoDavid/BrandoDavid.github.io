// Crear un vector que contenga la informacion del registro
var registro=[];

// Creamos un procedimiento para poder crear
function Registrar(nomregistrar,aperegistrar,corregistrar){
    var NuevoRegistro={
        nombre:nomregistro,
        apellido:aperegistro,
        correo:corregistro
    };
    registro.push(NuevoRegistro);
}

// Creamos una funcion para mostrar la informacion del registro
function Mostrar(){
    return registro;
}