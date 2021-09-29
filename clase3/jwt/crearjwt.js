const jwt = require('jsonwebtoken')
const secreto = require('./secreto')

let hora = () => Math.floor(+new Date() / 1000)
let iat = hora()
let exp = hora() + 60

let payload = {
    sub : 'max',
    iat,
    rol: 'PORTERIA'
}

let token = jwt.sign(payload, secreto, {expiresIn: '30s'})

console.log(token)
