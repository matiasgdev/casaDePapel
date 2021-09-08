let express = require('express')
let path = require('path')
let memticks = require('./memoriatics')
require('./tomametricas')

let app = express()

app.use(express.static(path.join(__dirname, '/public/')))
app.get('/endpoint', (req, res) => {
    memticks.incrementar()
    res.send('recibido !!!!')
})


app.listen(3030, () => {
    console.log('start at 3030')
})