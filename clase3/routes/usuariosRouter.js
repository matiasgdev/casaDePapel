const express = require('express')
const usuariosRouter = express.Router()
const genUsu = require('../lib/genusuario')
const _ = require('underscore')

usuariosRouter.use('/', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
})


usuariosRouter.route('/')
    .get((req, res) => {
        let arrUsuarios = _.range(10).map(genUsu)
        let jsonUsuarios = JSON.stringify(arrUsuarios)
        res
          .status(200)
          .send(arrUsuarios)
    })
    .post((req, res, goToError) => {
        setTimeout(() => {
            res.mistatus = 403
            goToError(new Error('POST NO PERMITIDO !!!!'))
        }, 500)
    })


module.exports = usuariosRouter