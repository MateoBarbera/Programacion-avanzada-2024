// function declaration

function saludar(nombre){

    console.log('bienvenido ' + nombre)
}

saludar('juan');

//function expression 

const cliente = function(nombreCliente) {
    console.log('bienvenido ' + nombreCliente);
}

cliente('juan');

function actividad(nombre, actividad){
    console.log('el cliente ' + nombre + ' esta realizando la actividad ' + actividad);
}

actividad ('juan' , 'aprende js');

