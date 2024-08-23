const carrito = [
    'producto1',
    'producto2',
    'producto3',
]

console.log(carrito)

const cart= carrito.map(producto =>{
    return 'el producto es  ' + producto
})

console.log(cart)