let redis = require('redis')
let uuid = require('uuid')
let sha2 = require('sha256')

/*
Como crear un usuario
{
    usuario: nombre del usuario
    password: password encriptada
    salt: id unico que me ayuda la encriptacion
}
*/

let objConn = { host: '157.230.26.239', pot: 6379}

let client = redis.createClient(objConn)

client.on('error', err => {
    console.log('se produjo un error')
    console.log(err)
})

// Todo el preparado de la enciptacion de la clave
// la generacion del salt

let usuarioCompleto = {
    usuario: 'max',
    password: '',
    salt: [uuid.v4(), uuid.v4()].join('--')
}

let password_mas_salt = ['max33RedBull', usuarioCompleto.salt].join('')

usuarioCompleto.password = sha2(password_mas_salt)
let usuarioJson = JSON.stringify(usuarioCompleto)

console.log(usuarioJson)


client.set('max', usuarioJson, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Clave seteada exitosamente !!!')
    client.quit(()=>{})
})

