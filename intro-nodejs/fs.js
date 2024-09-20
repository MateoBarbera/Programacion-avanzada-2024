const fs = require('fs');

function leer(ruta) {
  fs.readFile(ruta, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error al leer el archivo: ${err}`);
    } else {
      console.log(data.toString());
    }
  });
}

leer(__dirname + '/archivo.txt');