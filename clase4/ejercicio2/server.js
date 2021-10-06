let expres = require('express')

let app = expres()

const PORT = 3000

app.get('/', (req, res) => {
    res.status(200).send('Estoy ejecutando la version 100')
})

app.get('/close', (req, res) => {
    res.status(200).send('ok')
    srv.close(() => {
        console.log('closing')

    })
})

var srv = app.listen(PORT, () => {

})
