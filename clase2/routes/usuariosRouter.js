const express = require('express')
const usuariosRouter = express.Router()
const genUsu = require('../lib/genusuario')
const _ = require('underscore')

let idx = 0

usuariosRouter.use('/api/usuario', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
})

usuariosRouter.use('/api/usuario', (req, res, next) => {
    // Supongamos que ante alguna circumstancia
    // no se puede seguir adelante para entrar
    // en el get de /usuario
    idx ++

    if (idx % 3 === 0) {
        res.status(400).send(JSON.stringify({error:'bad Request'}))
        return
    }
    next()
})

usuariosRouter.use('/api/usuario', (req, res, next) => {
    if (idx % 2 === 0) {
        res.status(500).send(JSON.stringify({error:'Server error'}))
        return
    }
    next()
})

usuariosRouter.route('/api/usuario')
    .get((req, res) => {
        let arrUsuarios = _.range(10).map(genUsu)
        let jsonUsuarios = JSON.stringify(arrUsuarios)
        res
          .status(200)
          .send(arrUsuarios)
    })
    .post((req, res) => {
        res.mistatus = 403
        throw new Error('POST NO PERMITIDO !!!!')
    })

usuariosRouter.use('/api/usuario', (err, req, res, next) => {
    res.status(res.mistatus).send(err)
})

module.exports = usuariosRouter