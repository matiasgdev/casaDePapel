let express = require('express')
let path = require('path')
let memticks = require('./memoriatics')
require('./tomametricas')
let usuariosRouter = require('./routes/usuariosRouter')

let app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '/public/')))
{
    let rutaUnderscore = path.join(__dirname, './node_modules/underscore/underscore.js')
    //console.log(rutaUnderscore)
    app.use('/underscore', express.static(rutaUnderscore))
}

{
    app.use('/', usuariosRouter)
}

app.use('/api', (req, res, next) => {
    throw new Error()
})


app.get('/endpoint', (req, res) => {
    memticks.incrementar()
    res.send('recibido !!!!')
})

app.use('/api', (err, req, res, next) => {
    res.status(404).send(JSON.stringify({}))
})

app.listen(3000, () => {
    console.log('start at 3000')
})