function async(){
    console.log('soy asyncrona')
    setTimeout(()=>{
        console.log('soy siendo asyncrona')
    }
,3000);
}
console.log('inicio');

console.log('fin');

async();