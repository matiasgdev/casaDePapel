const express = require('express')
const associateSessionUser = require('../lib/associate-session-user')
const authRouter = express.Router()


authRouter.use('/', (req, res, next) => {
    console.log('voy a verificar si se dirije a login o bien tien un token')

    let excluidos = ['/api/login', '/api/loginweb'].includes(req.url)

    if (excluidos) {
        next()
        return
    }

    if (req.headers['x-token'] == undefined) {
        console.log('no trae token')
        res.mistatus = 401
        next(new Error('no autorizado'))
        return
    }
    next()
})

// Si el usuario es max max33RedBull
// genero un uuid y lo pongo en redis

authRouter.route('/api/login')
    .post(async (req, res) => {
        // Traer de redis el usuario max validar password
        // si todo coincide, le entrego el token
        console.log(req.body)
        const tokenId = await associateSessionUser(req.body.username)
        res.status(200).json({token: tokenId })
    })

module.exports = authRouter