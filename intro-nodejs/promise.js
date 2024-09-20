function hola(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`hola ${nombre}`);
            resolve(nombre);
        }, 2000);
    });
}

hola('carlos')