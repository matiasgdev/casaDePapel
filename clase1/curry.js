let _ = require('underscore')

// Curry o Partial application es un mecanismo a traves
// del cual puedo aplicar parcialmente una funcion

function suma(x, y) {
    return x + y
}

let suma10 = _.partial(suma, 10)
let suma20 = _.partial(suma, 20)

console.log(suma20(5))
