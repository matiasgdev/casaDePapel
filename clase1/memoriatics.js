let contador = 0

function incrementar() {
    console.log('incrementando!!!')
    contador++
}

function obtener() {
    let z = contador
    contador = 0
    return z
}

module.exports = {
    incrementar,
    obtener
}