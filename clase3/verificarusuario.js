let redis = require('redis')
let uuid = require('uuid')
let sha2 = require('sha256')

/*
Como verificar un usuario

1) Ir a redis y traer el objeto usuario por la key
   nombre de ususario
2) hacer la combinacion de sha2(passwordCLEAR, salt)
3) Comparar el resultado con el que hay en redis

*/

let objConn = { host: '167.71.35.68', pot: 6379}

let client = redis.createClient(objConn)

client.on('error', err => {
    console.log('se produjo un error')
    console.log(err)
})


client.get('max', (err, objRedis) => {
    if (err) {
        console.log(err)
        return
    }

    objRedisPared = JSON.parse(objRedis)
    console.log(objRedisPared)

    // Componer la password en clear con el salt de ese usaurio
    let password_mas_salt = ['max33RedBull', objRedisPared.salt].join('')
    let passwordEncriptada = sha2(password_mas_salt)

    console.log(objRedisPared.password)
    console.log(passwordEncriptada)

    client.quit(()=>{})
})

