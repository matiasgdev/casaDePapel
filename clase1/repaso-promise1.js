// Sintaxis inicial
let _ = require('underscore')

function crearPromise() {
    return new Promise((resolve, reject)=>{
        _.delay(()=>{
            console.log('finalizo la espera')
            // resolve('OK')
            reject(new Error('Mensaje de error'))
        }, 2000)
    })
}

crearPromise()
.then(z => { console.log('el valor retornado es: ' + z) })
.catch(err => console.log(err))

