let express = require('express')
let path = require('path')
let usuariosRouter = require('./routes/usuariosRouter')
let authRouter = require('./routes/authRouter')

let app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '/public/')))
{
    let rutaUnderscore = path.join(__dirname, './node_modules/underscore/underscore.js')
    //console.log(rutaUnderscore)
    app.use('/underscore', express.static(rutaUnderscore))
}

app.use((req, res, next)=>{
    res.setHeader('Content-Type', 'application/json')
    res.mistatus = 200
    next()
})

app.use('/', authRouter)
app.use('/api/usuario', usuariosRouter)


app.get('/endpoint', (req, res) => {
    memticks.incrementar()
    res.send('recibido !!!!')
})

app.use('/', (err, req, res, next) => {
    res.status(res.mistatus).json({msg : err.message})
})

app.listen(3000, () => {
    console.log('start at 3000')
})