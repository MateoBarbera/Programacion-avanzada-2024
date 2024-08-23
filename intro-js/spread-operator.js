let lenguajes = ['javascript' , 'php', 'python', 'java']
let framework =['react', 'laravel', 'django', 'sprint'] 


//unir arreglos en uno soloooo

let combinacion = lenguajes.concat(framework)
console.log(combinacion)


let combinator = [...lenguajes, ...framework]
console.log(combinator)


let [ultimo] = [...lenguajes].reverse()
console.log(ultimo)