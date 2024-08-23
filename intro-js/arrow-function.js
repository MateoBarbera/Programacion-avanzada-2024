//function expression 

const cliente = function(nombreCliente) {
    console.log('bienvenido ' + nombreCliente);
}

cliente('juan');

function actividad(nombre, actividad){
    console.log('el cliente ' + nombre + ' esta realizando la actividad ' + actividad);
}

actividad ('juan' , 'aprende js');


//arrow function
 const clienteA = (nombreCliente) =>{
    console.log('mostrar datos del cliente ' + nombreCliente);

 } 

clienteA(' pepe');