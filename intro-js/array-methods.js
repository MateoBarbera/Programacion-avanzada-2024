//metodos para arreglos

const person =[
    {name: 'Juan', age: 25},
    {name: 'pedro', age: 30},
    {name: 'Ana', age: 20},
    {name:'pepe', age:33}
]


console.log(person)

const mayores = person.filter(person => {
    return person.age > 25
})

const pedro = person.find(person => {
    return person.name === 'pedro'
})

console.log(pedro)

console.log(mayores)


